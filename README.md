# PathwayCS

**Live demo:** [cs-pathway-finder.vercel.app](https://cs-pathway-finder.vercel.app/)

**A roadmap generator for breaking into tech.** Pick a field — software engineering, cybersecurity, data science, AI/ML, cloud/DevOps, or data engineering — and get a phased, resource-linked plan (real Coursera/Udemy/TryHackMe/LeetCode links, not vague advice), current job-market stats, and interview prep. A short quiz can also recommend a pathway based on your degree, experience, and available time.

No account needed to use it. Progress is tracked in the browser by default; signing in is optional and just syncs that progress across devices.

## Why I built this

Most "how do I become a software engineer" advice online is scattered across forum posts and outdated blog articles. I wanted one place that turns that advice into a structured, checkable plan — closer to a project tracker than a listicle — and that's honest about realistic timelines and how competitive each field actually is, rather than selling a bootcamp.

## Features

- **6 detailed career pathways**, each broken into phases → milestones → curated resources, with time estimates per milestone
- **Progress tracking with no login wall** — checkboxes persist to `localStorage`; creating an account later merges that progress into a synced account instead of losing it
- **Optional accounts** — real email/password auth (not a mocked login screen)
- **Pathway recommender** — scores all 6 pathways against your degree background, experience level, hours/week available, and urgency, weighted against each field's actual demand/competitiveness data
- **Plan customizer** — set your weekly time commitment and mark phases you already know; generates a real calendar timeline (dates, not just week counts)
- **Job-market & interview prep per pathway** — salary bands, growth outlook, competitiveness, common interview formats, and sample questions

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Client state | Zustand (with `localStorage` persistence) |
| Auth | Custom — bcrypt password hashing, signed JWT session cookie (`jose`), no third-party auth provider |
| Database | SQLite via Prisma |

Auth was built by hand rather than pulled from a library: at the time of writing, this project runs on the newly-released Next.js 16 / React 19.2, and the popular auth libraries didn't yet have confirmed compatibility. A ~100-line hand-rolled JWT-cookie flow was more predictable than debugging a beta dependency.

## Project structure

```
src/
  app/                    # routes (App Router)
    pathways/[slug]/      # pathway detail page
    api/auth/             # signup, login, logout, session check
    api/progress/         # progress read/write + local→account merge
  components/             # UI (roadmap, customizer, recommender quiz, stats, interview prep)
  content/                # typed pathway data — phases, milestones, resources, stats
  lib/                    # auth, prisma client, recommender scoring
  store/                  # Zustand progress store
prisma/schema.prisma      # User + ProgressItem models
```

Pathway content is fully data-driven (`src/content/pathways/*.ts`) — adding a new field (e.g. game dev, mobile) is a content change, not a UI change.

## Running locally

```bash
npm install
npx prisma db push   # creates the local SQLite database
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Possible next steps

- Move from local SQLite to a hosted Postgres for production durability
- Community-editable resource links, so course recommendations don't go stale
- Export a generated plan to a calendar (.ics) or PDF

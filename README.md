🧑‍💻 Job Board App

A full-stack job board platform built with Next.js 13 (App Router), NextAuth.js, Prisma, and PostgreSQL.
This project allows users to sign in with GitHub, browse job postings, create new job listings, apply to jobs, and manage applications through a personal dashboard.

The app is designed with modern UI principles using Tailwind CSS and ensures scalability and maintainability with Prisma ORM and Next.js server actions.

✨ Features
👤 User Features

Authentication with GitHub using NextAuth.js (secure OAuth integration).

Browse jobs with filtering options:

Search by title, company, or description

Filter by job type (Full-time, Part-time, Contract, Internship)

Filter by location

Job applications:

Apply directly to job postings

Prevent duplicate applications (one per job per user)

Track application status (PENDING, ACCEPTED, REJECTED)

Dashboard:

View jobs you’ve applied to

Track application statuses

Manage jobs you’ve posted

🛠️ Employer Features

Post new job listings with details:

Title, Company, Location, Type, Description, Salary

Manage posted jobs:

Track applications count

View job details in dashboard

🎨 UI/UX

Responsive design: fully mobile-friendly navigation and layouts

Navbar:

Links adapt based on user session (Sign in / Sign out + Dashboard links)

Job Cards: clean previews of job information with quick links

Apply Button with dynamic states (loading, success, error)

🛠️ Tech Stack

Framework: Next.js 13+
 (App Router, Server Components, Server Actions)

Authentication: NextAuth.js
 (JWT sessions, GitHub provider)

Database: PostgreSQL (relational database)

ORM: Prisma

Styling: Tailwind CSS

Icons: Lucide React

Utilities:

date-fns
 for time formatting

axios
 for API requests



🗄️ Database Schema

Using Prisma, the main models are:

User – Registered users (via GitHub OAuth)

Account – Linked provider accounts (NextAuth requirement)

Session – User sessions (NextAuth requirement)

Job – Job postings with relations to User (postedBy)

Application – Applications submitted by users to jobs

VerificationToken – Token management (NextAuth requirement)

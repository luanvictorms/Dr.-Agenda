This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Details and information about the setup and improvements to Dev Lifecycle

- eslint -D for code quality
- eslint-plugin-simple-import-sort -D for import sorting
- tailwindcss -D for styling
- @tailwindcss/postcss -D for tailwindcss
- prettier-plugin-tailwindcss -D for tailwindcss sorting
- conventional commits for Github commit patterns

## Project Architecture

- PostgreSQL
- Drizzle for ORM
- Next.js 15 for frontend
- TypeScript for type safety
- Shadcn/ui for components

## Data Structure Tables

- User
- Clinic
- Doctor
- Patient
- Appointments

User can have many clinics and one clinic can have many users. (Many to many/M2M)
Clinic have many doctors and doctors have one clinic. (One to many/O2M)
Doctor have one clinic (O2O)
One Clinic can have many Patients (O2M)
One Doctors can have many appointments (O2M)
One Clinic can have many appointments (O2M)
Patients can have many appointments (O2M)
Appointments have one doctor (O2O)
Appointments have one patient (O2O)

Drizzle push changes to databases command:
npx drizzle-kit push
npx drizzle-kit studio (view database)

## Functional requirements:

- [] Authentication
  - [] User (ADMIN) can have multi clinics.
- [] clinic needs to be able to manage doctors (Create/Read/Update/Delete)
  - [] clinic needs to be able to manage doctors' availability (Create/Read/Update/Delete)
  - [] clinic needs to be able to manage doctors' specializations (Create/Read/Update/Delete)
  - [] clinic needs to be able to manage doctors' Prices.
- [] clinic needs to be able to manage patients (Create/Read/Update/Delete)
- [] clinic needs to be able to create appointments of x medical for 1 pattient (Create/Read/Update/Delete)
- [] We will have subscription plans for clinics.

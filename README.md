## Project Details and information about the setup and improvements to Dev Lifecycle

- eslint -D for code quality
- eslint-plugin-simple-import-sort -D for import sorting
- tailwindcss -D for styling
- @tailwindcss/postcss -D for tailwindcss
- prettier-plugin-tailwindcss -D for tailwindcss sorting
- conventional commits for Github commit patterns
- composition pattern

## Project Architecture

- PostgreSQL
- Drizzle for ORM
- Next.js 15 for frontend
- TypeScript for type safety
- Shadcn/ui for components
- Zod for form validation
- Better-Auth for authentication (Google)

## Data Structure Tables

- User
- Clinic
- Doctor
- Patient
- Appointments

User can have many clinics and one clinic can have many users. (M2M/M2M)
Clinic have many doctors and doctors have one clinic. (O2M/O2M)
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

- [x] Authentication
  - [x] User (ADMIN) can have one clinic.
  - [x] User can be authenticated with Google.
- [x] clinic needs to be able to manage doctors (Create/Read/Update/Delete)
  - [x] clinic needs to be able to manage doctors' availability (Create/Read/Update/Delete)
  - [x] clinic needs to be able to manage doctors' specializations (Create/Read/Update/Delete)
  - [x] clinic needs to be able to manage doctors' Prices.
- [] clinic needs to be able to manage patients (Create/Read/Update/Delete)
- [] clinic needs to be able to create appointments of x medical for 1 pattient (Create/Read/Update/Delete)
- [] We will have subscription plans for clinics.

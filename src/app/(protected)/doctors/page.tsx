import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageActions,
  PageCardContent,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/page-container";
import { Separator } from "@/components/ui/separator";
import { db } from "@/db";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import AddDoctorButton from "./_components/add-doctor-button";
import DoctorCard from "./_components/doctor-card";

const DoctorsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinics-form");
  }

  const doctors = await db.query.doctorsTable.findMany({
    where: eq(doctorsTable.clinicId, session.user.clinic.id),
  });

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Doctors</PageTitle>
          <PageDescription>Manage your doctors</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <AddDoctorButton />
        </PageActions>
      </PageHeader>
      <Separator />
      <PageContent>
        <PageCardContent>
          {doctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))}
        </PageCardContent>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;

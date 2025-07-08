import { Plus } from "lucide-react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import {
  PageActions,
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";

const PatientsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinics-form");
  }

  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Patients</PageTitle>
          <PageDescription>View your patients</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Add Patient
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Patients</h1>
      </PageContent>
    </PageContainer>
  );
};

export default PatientsPage;

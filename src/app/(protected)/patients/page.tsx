import { Plus } from "lucide-react";

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

const PatientsPage = () => {
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

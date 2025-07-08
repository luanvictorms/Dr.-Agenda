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

const DoctorsPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Doctors</PageTitle>
          <PageDescription>Manage your doctors</PageDescription>
        </PageHeaderContent>
        <PageActions>
          <Button>
            <Plus />
            Add doctor
          </Button>
        </PageActions>
      </PageHeader>
      <PageContent>
        <h1>Doctors</h1>
      </PageContent>
    </PageContainer>
  );
};

export default DoctorsPage;

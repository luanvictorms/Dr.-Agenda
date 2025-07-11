import {
  PageContainer,
  PageContent,
  PageDescription,
  PageHeader,
  PageHeaderContent,
  PageTitle,
} from "@/components/page-container";
import { Separator } from "@/components/ui/separator";

const PlansPage = () => {
  return (
    <PageContainer>
      <PageHeader>
        <PageHeaderContent>
          <PageTitle>Subscription plans</PageTitle>
          <PageDescription>Choose your subscription plan</PageDescription>
        </PageHeaderContent>
      </PageHeader>
      <Separator />
      <PageContent>
        <h1>Enjoy this Demonstration for free!</h1>
        <p>
          At the moment we dont have any subscription plans. In the future we
          will have a free plan and a paid plan.
        </p>
      </PageContent>
    </PageContainer>
  );
};

export default PlansPage;

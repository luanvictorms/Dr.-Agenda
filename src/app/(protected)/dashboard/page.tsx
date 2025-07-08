import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";

const DashboardPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/authentication");
  }

  if (!session.user.clinic) {
    redirect("/clinics-form");
  }

  return (
    <div className="p-4">
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;

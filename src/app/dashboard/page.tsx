import { session, validateAuth } from "@/lib/validateAuth";

import SignOutButton from "./components/sign-out-button";

const DashboardPage = async () => {
  validateAuth(session);

  return (
    <div>
      <h1>Dashboard</h1>
      <h1>{session?.user?.name}</h1>
      <SignOutButton />
    </div>
  );
};

export default DashboardPage;

import { AppSidebar } from "@/app/(protected)/_components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
      <Toaster position="bottom-center" richColors theme="light" />
    </>
  );
};

export default ProtectedLayout;

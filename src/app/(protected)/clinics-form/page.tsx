import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ClinicForm from "./_components/form";

const ClinicFormPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Dialog open>
        <form>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>New Clinic</DialogTitle>
              <DialogDescription>
                Create a new clinic to continue to use the app.
              </DialogDescription>
            </DialogHeader>

            <ClinicForm />
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;

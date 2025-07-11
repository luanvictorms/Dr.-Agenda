import { TrashIcon } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

import { deleteAppointment } from "@/actions/delete-appointment";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { appointmentsTable } from "@/db/schema";

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: { name: string };
  doctor: { name: string };
};

const DeleteAppointmentAlertDialog = ({
  appointment,
}: {
  appointment: Appointment;
}) => {
  const deleteAppointmentAction = useAction(deleteAppointment, {
    onSuccess: () => {
      toast.success("Appointment deleted successfully");
    },
    onError: () => {
      toast.error("Failed to delete appointment");
    },
  });

  const handleDeleteAppointmentClick = () => {
    if (!appointment) return;
    deleteAppointmentAction.execute({ id: appointment.id });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Are you absolutely sure? Delete appointment for{" "}
            {appointment.patient.name}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            appointment from your database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>No, Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAppointmentClick}>
            <TrashIcon className="mr-2 h-4 w-4" /> Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAppointmentAlertDialog;

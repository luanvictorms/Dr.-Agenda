"use client";

import dayjs from "dayjs";
import { Calendar, Clock, DollarSign, UserRound } from "lucide-react";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { appointmentsTable } from "@/db/schema";
import { formatCurreyInCents } from "@/helpers/currency";

import DeleteAppointmentAlertDialog from "./delete-appointment-alert-dialog";

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: { name: string };
  doctor: { name: string };
};

interface AppointmentCardProps {
  appointment: Appointment;
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const patientInitials = appointment.patient.name
    .split(" ")
    .map((name) => name[0])
    .join("");

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="h-10 w-10">
              <AvatarFallback>{patientInitials}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-sm font-medium">
                {appointment.patient.name}
              </h3>
              <p className="text-muted-foreground text-xs">
                {dayjs(appointment.date).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
          <DeleteAppointmentAlertDialog appointment={appointment} />
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <Badge variant="outline">
          <UserRound className="mr-1" />
          Dr. {appointment.doctor.name}
        </Badge>
        <Badge variant="outline">
          <Calendar className="mr-1" />
          {dayjs(appointment.date).format("DD/MM/YYYY")}
        </Badge>
        <Badge variant="outline">
          <Clock className="mr-1" />
          {dayjs(appointment.date).format("HH:mm")}
        </Badge>
        <Badge variant="outline">
          <DollarSign className="mr-1" />
          {formatCurreyInCents(appointment.appointmentPriceInCents)}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">Details</Button>
          </DialogTrigger>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

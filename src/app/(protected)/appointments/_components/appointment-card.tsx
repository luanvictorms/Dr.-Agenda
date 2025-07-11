"use client";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { Calendar, Clock, DollarSign, UserRound } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { appointmentsTable } from "@/db/schema";
import { formatCurrencyInCents } from "@/helpers/currency";

dayjs.extend(utc);
dayjs.extend(timezone);

import DeleteAppointmentAlertDialog from "./delete-appointment-alert-dialog";

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: { name: string };
  doctor: { name: string };
};

interface AppointmentCardProps {
  appointment: Appointment;
}

export function AppointmentCard({ appointment }: AppointmentCardProps) {
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
          {formatCurrencyInCents(appointment.appointmentPriceInCents)}
        </Badge>
      </CardContent>
      <Separator />
    </Card>
  );
}

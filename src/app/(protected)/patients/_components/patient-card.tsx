"use client";

import dayjs from "dayjs";
import { Calendar, Phone, User } from "lucide-react";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { patientsTable } from "@/db/schema";

import { UpsertPatientForm } from "./upsert-patient-form";

interface PatientCardProps {
  patient: typeof patientsTable.$inferSelect;
}

export function PatientCard({ patient }: PatientCardProps) {
  const [isUpsertPatientDialogOpen, setIsUpsertPatientDialogOpen] =
    useState(false);
  const patientInitials = patient.name
    .split(" ")
    .map((name) => name[0])
    .join("");
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{patientInitials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-medium">{patient.name}</h3>
            <p className="text-muted-foreground text-xs">{patient.email}</p>
          </div>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-2">
        <Badge variant="outline">
          <Phone className="mr-1" />
          {patient.phoneNumber}
        </Badge>
        <Badge variant="outline">
          <User className="mr-1" />
          {patient.sex === "male" ? "Male" : "Female"}
        </Badge>
        <Badge variant="outline">
          <Calendar className="mr-1" />
          {dayjs(patient.createdAt).format("DD/MM/YYYY")}
        </Badge>
      </CardContent>
      <Separator />
      <CardFooter>
        <Dialog
          open={isUpsertPatientDialogOpen}
          onOpenChange={setIsUpsertPatientDialogOpen}
        >
          <DialogTrigger asChild>
            <Button className="w-full">Details</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {patient ? patient.name : "New Patient"}{" "}
              </DialogTitle>
              <DialogDescription>
                {patient
                  ? "Update patient information"
                  : "Create a new patient for your clinic."}
              </DialogDescription>
            </DialogHeader>
            <UpsertPatientForm
              patient={patient}
              onSuccess={() => setIsUpsertPatientDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}

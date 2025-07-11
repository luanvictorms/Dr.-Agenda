"use client";

import dayjs from "dayjs";
import { useMemo, useState } from "react";

import { PageCardContent } from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { appointmentsTable } from "@/db/schema";

import { AppointmentCard } from "./appointment-card";

type Appointment = typeof appointmentsTable.$inferSelect & {
  patient: { name: string };
  doctor: { name: string };
};
type SearchField = "patient" | "doctor" | "date";

const SEARCH_TABS: {
  value: SearchField;
  label: string;
  placeholder: string;
}[] = [
  {
    value: "patient",
    label: "By patient",
    placeholder: "Search by patient name",
  },
  { value: "doctor", label: "By doctor", placeholder: "Search by doctor name" },
  {
    value: "date",
    label: "By date",
    placeholder: "Search by date (DD/MM/YYYY)",
  },
];

export function AppointmentsList({
  appointments,
}: {
  appointments: Appointment[];
}) {
  const [searchField, setSearchField] = useState<SearchField>("patient");
  const [searchValue, setSearchValue] = useState("");

  const handleTabChange = (field: SearchField) => {
    setSearchField(field);
    setSearchValue("");
  };

  const filteredAppointments = useMemo(() => {
    if (!searchValue) return appointments;

    return appointments.filter((appointment) => {
      if (searchField === "patient") {
        return appointment.patient.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
      if (searchField === "doctor") {
        return appointment.doctor.name
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
      if (searchField === "date") {
        return dayjs(appointment.date)
          .format("DD/MM/YYYY")
          .includes(searchValue);
      }
      return false;
    });
  }, [appointments, searchField, searchValue]);

  return (
    <>
      <Tabs value={searchField}>
        <TabsList className="w-full">
          {SEARCH_TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              onClick={() => handleTabChange(tab.value)}
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {SEARCH_TABS.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <Input
              aria-label={tab.placeholder}
              placeholder={tab.placeholder}
              value={searchField === tab.value ? searchValue : ""}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full"
              autoFocus={searchField === tab.value}
            />
          </TabsContent>
        ))}
      </Tabs>

      <PageCardContent>
        {filteredAppointments.length === 0 ? (
          <p className="text-muted-foreground">No appointments found.</p>
        ) : (
          filteredAppointments.map((appointment) => (
            <AppointmentCard appointment={appointment} key={appointment.id} />
          ))
        )}
      </PageCardContent>
    </>
  );
}

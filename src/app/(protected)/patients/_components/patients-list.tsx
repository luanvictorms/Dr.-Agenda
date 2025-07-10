"use client";

import { useMemo, useState } from "react";

import { PageCardContent } from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { patientsTable } from "@/db/schema";

import { PatientCard } from "./patient-card";

type Patient = typeof patientsTable.$inferSelect;
type SearchField = "name" | "email" | "phoneNumber";

const SEARCH_TABS: {
  value: SearchField;
  label: string;
  placeholder: string;
}[] = [
  { value: "name", label: "By name", placeholder: "Search patients by name" },
  {
    value: "email",
    label: "By email",
    placeholder: "Search patients by email",
  },
  {
    value: "phoneNumber",
    label: "By phone",
    placeholder: "Search patients by phone",
  },
];

export function PatientsList({ patients }: { patients: Patient[] }) {
  const [searchField, setSearchField] = useState<SearchField>("name");
  const [searchValue, setSearchValue] = useState("");

  const handleTabChange = (field: SearchField) => {
    setSearchField(field);
    setSearchValue("");
  };

  const filteredPatients = useMemo(() => {
    if (!searchValue) return patients;
    return patients.filter((patient) =>
      patient[searchField].toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [patients, searchField, searchValue]);

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
        {filteredPatients.length === 0 ? (
          <p className="text-muted-foreground">No patients found.</p>
        ) : (
          filteredPatients.map((patient) => (
            <PatientCard patient={patient} key={patient.id} />
          ))
        )}
      </PageCardContent>
    </>
  );
}

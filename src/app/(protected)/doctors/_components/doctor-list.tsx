"use client";

import { useMemo, useState } from "react";

import { PageCardContent } from "@/components/page-container";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { doctorsTable } from "@/db/schema";

import DoctorCard from "./doctor-card";

type Doctor = typeof doctorsTable.$inferSelect;
type SearchField = "name" | "speciality";

const SEARCH_TABS: {
  value: SearchField;
  label: string;
  placeholder: string;
}[] = [
  { value: "name", label: "By name", placeholder: "Search doctors by name" },
  {
    value: "speciality",
    label: "By speciality",
    placeholder: "Search doctors by speciality",
  },
];

export function DoctorsList({ doctors }: { doctors: Doctor[] }) {
  const [searchField, setSearchField] = useState<SearchField>("name");
  const [searchValue, setSearchValue] = useState("");

  const handleTabChange = (field: SearchField) => {
    setSearchField(field);
    setSearchValue("");
  };

  const filteredDoctors = useMemo(() => {
    if (!searchValue) return doctors;
    return doctors.filter((doctor) =>
      doctor[searchField].toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [doctors, searchField, searchValue]);

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
        {filteredDoctors.length === 0 ? (
          <p className="text-muted-foreground">No patients found.</p>
        ) : (
          filteredDoctors.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor.id} />
          ))
        )}
      </PageCardContent>
    </>
  );
}

import {
  Activity,
  Baby,
  Bone,
  Brain,
  Eye,
  Hand,
  Heart,
  Hospital,
  Stethoscope,
} from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TopSpecialtiesProps {
  topSpecialties: {
    speciality: string;
    appointments: number;
  }[];
}

const getspecialityIcon = (speciality: string) => {
  const specialityLower = speciality.toLowerCase();

  if (specialityLower.includes("cardiolog")) return Heart;
  if (
    specialityLower.includes("ginecolog") ||
    specialityLower.includes("obstetri")
  )
    return Baby;
  if (specialityLower.includes("pediatr")) return Activity;
  if (specialityLower.includes("dermatolog")) return Hand;
  if (
    specialityLower.includes("ortoped") ||
    specialityLower.includes("traumatolog")
  )
    return Bone;
  if (specialityLower.includes("oftalmolog")) return Eye;
  if (specialityLower.includes("neurolog")) return Brain;

  return Stethoscope;
};

export default function TopSpecialties({
  topSpecialties,
}: TopSpecialtiesProps) {
  const maxAppointments = Math.max(
    ...topSpecialties.map((i) => i.appointments),
  );
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Hospital className="text-muted-foreground" />
            <CardTitle className="text-base">Specialties</CardTitle>
          </div>
        </div>

        {/* specialitys List */}
        <div className="space-y-6">
          {topSpecialties.map((speciality) => {
            const Icon = getspecialityIcon(speciality.speciality);
            const progressValue =
              (speciality.appointments / maxAppointments) * 100;

            return (
              <div
                key={speciality.speciality}
                className="flex items-center gap-2"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                  <Icon className="text-primary h-5 w-5" />
                </div>
                <div className="flex w-full flex-col justify-center">
                  <div className="flex w-full justify-between">
                    <h3 className="text-sm">{speciality.speciality}</h3>
                    <div className="text-right">
                      <span className="text-muted-foreground text-sm font-medium">
                        {speciality.appointments} appoint.
                      </span>
                    </div>
                  </div>
                  <Progress value={progressValue} className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}

"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import avatar1 from "@/assets/testimonials/avatar-1.jpg";
import avatar3 from "@/assets/testimonials/avatar-3.jpg";
import avatar4 from "@/assets/testimonials/avatar-4.jpg";
import avatar5 from "@/assets/testimonials/avatar-5.jpg";
import avatar7 from "@/assets/testimonials/avatar-7.jpg";
import avatar9 from "@/assets/testimonials/avatar-9.jpg";

const people = [
  {
    id: 1,
    name: "Vitor Navarro",
    designation: "Software Engineer",
    image: avatar7,
  },
  {
    id: 2,
    name: "Guilherme Godoy",
    designation: "Software Engineer",
    image: avatar9,
  },
  {
    id: 3,
    name: "Elaine Briski",
    designation: "Product Manager",
    image: avatar4,
  },
  {
    id: 4,
    name: "Larissa Fabbri",
    designation: "UX Designer",
    image: avatar1,
  },
  {
    id: 5,
    name: "Matheus Eler",
    designation: "Developer",
    image: avatar5,
  },
  {
    id: 6,
    name: "Maria Eduarda",
    designation: "Product Manager",
    image: avatar3,
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
      <span className="text-xs mt-1 text-zinc-700">
        <b className="text-rose-600">+300</b> pessoas organizadas.
      </span>
    </div>
  );
}

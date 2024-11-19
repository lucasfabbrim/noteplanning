"use client";

import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export function ButtonPhone() {
  return (
    <div className="block lg:hidden items-center pt-8 relative">
      <Button
        variant="default"
        onClick={() =>
          sendGAEvent("event", "buttonClicked", { value: "myButton" })
        }
        className="relative h-10 bg-[#0582FF] text-white rounded-[13px] flex font-medium text-base"
      >
        <h1 className="flex px-2 gap-2 items-center">
          Garanta sua vaga agora
          <ChevronRight
            size={3}
            strokeWidth={3}
            className="text-white h-2 w-2"
          />
        </h1>
      </Button>
    </div>
  );
}

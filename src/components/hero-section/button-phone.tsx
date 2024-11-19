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
        className="relative h-10 bg-rose-600 text-white rounded-[10px] flex font-semibold"
      >
        <h1 className="flex px-2 gap-2 items-center">
          Compre agora na pré-venda
          <ChevronRight
            size={3}
            strokeWidth={3}
            className="text-white h-2 w-2"
          />
        </h1>
      </Button>
      <div
        className="absolute inset-0 mx-4"
        style={{
          borderBottom: "1px solid transparent",
          borderImage:
            "linear-gradient(to right, transparent, white, transparent) 1",
        }}
      />
    </div>
  );
}

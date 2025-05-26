import { StickyBanner } from "@/components/ui/sticky-banner";
import { Flame } from "lucide-react";

export function Banner() {
  return (
    <div className="relative flex flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-red-500 to-red-600 flex-col">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-sm flex items-center justify-center gap-2">
          GARANTA SEU PLANNER HOJE MESMO!{" "}
          <Flame className="fill-red-700 text-red-700 size-3.5" />
        </p>
      </StickyBanner>
    </div>
  );
}

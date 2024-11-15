import { Button } from "../ui/button";

export function ButtonDesktop() {
  return (
    <div className="hidden lg:block items-center pt-10">
      <Button variant="default" className="bg-white text-black">
        pre-order
      </Button>
    </div>
  );
}

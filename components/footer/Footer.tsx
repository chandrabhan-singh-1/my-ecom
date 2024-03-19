import { Separator } from "../ui/separator";
import { Copyright } from "./copyright";

export const Footer = () => {
  return (
    <div className="h-40 bottom-0 flex flex-col gap-2 bg-zinc-200">
      <div className="flex h-[70%]">
        <div className="w-full flex items-center justify-center">part 1</div>
        <div className="w-full flex items-center justify-center">part 2</div>
        <div className="w-full flex items-center justify-center">part 3</div>
      </div>
      <Separator className="my-2" />
      <Copyright />
    </div>
  );
};

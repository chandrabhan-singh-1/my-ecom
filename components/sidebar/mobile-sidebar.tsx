import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export const MobileSidebar = () => {
  return (
    <Sheet open={false}>
      <SheetTrigger className="md:hidden">
        <Menu className="h-5 w-5 ml-2" />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-purple-600">Constructor</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col">
          <Link href={"/"} className="p-2 w-full">
            Home
          </Link>
          <Link href={"/"} className="p-2 w-full">
            Explore
          </Link>
          <Link href={"/"} className="p-2 w-full">
            Offers
          </Link>
          <Link href={"/"} className="p-2 w-full">
            About
          </Link>
          <Link href={"/"} className="p-2 w-full">
            Contact Us
          </Link>
        </div>
        <SheetFooter>
          <Button variant={"secondary"} className="">
            Profile
          </Button>
          <Button variant={"ghost"} className="text-purple-500">
            Dashboard
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

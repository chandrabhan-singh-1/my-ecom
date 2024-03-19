import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Session } from "next-auth";
import { CircleUser, LogOut } from "lucide-react";
import { logout } from "@/actions/auth";

interface UserBtnProps {
  session: Session;
}

export const UserBtn = ({ session }: UserBtnProps) => {
  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <CircleUser className="h-7 w-7 hover:scale-110" />
      </PopoverTrigger>
      <PopoverContent>
        <section className="">
          <h1 className="font-semibold p-2 rounded-md">{session.user?.name}</h1>
          <div
            onClick={() => logout()}
            className="hover:bg-gray-200 flex items-center justify-between px-4 py-1 rounded-md cursor-pointer"
          >
            <span className="">Logout</span>
            <LogOut className="h-4 w-4" />
          </div>
        </section>
      </PopoverContent>
    </Popover>
  );
};

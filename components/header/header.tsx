"use client";

import { LogIn, ShoppingBag } from "lucide-react";
import { Logo } from "./logo";
import { Search } from "./search";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { login } from "@/actions/auth";
import { Hint } from "../hint";
import { UserBtn } from "../user/user-btn";

export const Header = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-purple-400 flex items-center justify-between h-16 px-2 md:px-4 py-3 gap-x-2 md:gap-x-4">
      <Link href={"/"} className="flex items-center gap-x-2">
        <Logo height={55} width={55} />
      </Link>
      <Search />
      <div className="flex items-center gap-x-1">
        {session ? (
          <Hint label="User">
            <UserBtn session={session} />
          </Hint>
        ) : (
          <Hint label="Login">
            <LogIn
              onClick={() => login()}
              className="h-6 w-6 hover:scale-110"
            />
          </Hint>
        )}
        <Hint label="Cart">
          <Link href="/cart">
            <ShoppingBag className="h-7 w-7 ml-2 hover:scale-110 " />
          </Link>
        </Hint>
      </div>
    </nav>
  );
};

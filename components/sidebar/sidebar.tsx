import { Button } from "../ui/button";
import Link from "next/link";

const SidebarItems = [];

export const Sidebar = () => {
  return (
    <section className="hidden md:flex flex-col w-40 h-full">
      <div className="w-full h-full">
        <Link href="/home" className="">
          Home
        </Link>
        <Link href="/latest">Latest</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/offers">Offers</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>
      <div className="flex w-full justify-between">
        <Button>Logout</Button>
        <Button className="text-purple-600">Dashboard</Button>
      </div>
    </section>
  );
};

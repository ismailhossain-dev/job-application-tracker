// I have creating navbar by default
import { Briefcase } from "lucide-react";
import Link from "next/link";
import { Button } from "./button";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="container mx-auto flex h-16 items-center px-4 justify-between">
        <Link href="/" className="flex gap-2 items-center text-xl font-semibold text-pink-500">
          <Briefcase />
          Job Tracker
        </Link>
        <div className="flex gap-3 items-center ">
          <Link href="sign-in">
            <Button className="hover:text-white bg-pink-500 p-5">Log In</Button>
          </Link>
          <Link href="sign-up">
            <Button className="bg-pink-500 p-5">Start for free</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

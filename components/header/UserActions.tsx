import { cart } from "@/assets";
import { Heart, Menu, Search, User, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MdHeadphones } from "react-icons/md";

interface UserActionsProps {
  setMobileSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const UserActions = ({ setMobileSearchOpen, mobileMenuOpen, setMobileMenuOpen }: UserActionsProps) => {
    return (
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
          <button
            className="md:hidden text-white hover:text-teal-200 transition-colors"
            onClick={() => setMobileSearchOpen(v => !v)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>

          <div className="hidden lg:flex flex-col items-start leading-tight">
            <span className="text-gray-300 text-xs">Call Us Now</span>
            <div className="flex items-center gap-1 text-white font-normal text-sm">
              <MdHeadphones  className="text-xl" />
              <span>+011 5827918</span>
            </div>
            <button className="text-gray-300 text-xs hover:text-white transition-colors">Sign In</button>
          </div>

          <button className="text-white hover:text-teal-200 transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <Link href="/#" className="text-white hover:text-teal-200 transition-colors hidden sm:block">
            <Heart size={20} />
          </Link>
          <Link href="/#" className="flex items-center gap-1 text-white hover:text-teal-200 transition-colors">
            <div className="relative">
              <Image src={cart} alt="Cart" width={20} height={20} />
              <span className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold leading-none">
                3
              </span>
            </div>
            <span className="hidden sm:inline text-sm font-medium ml-1">Cart</span>
          </Link>

          <button
            className="md:hidden text-white hover:text-teal-200 transition-colors"
            onClick={() => setMobileMenuOpen(v => !v)}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
    );
};

export default UserActions;
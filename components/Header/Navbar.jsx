import Link from "next/link";
import SearchBar from "../Search/SearchBar";
import getPostMetadata from "@/utils/getPostMetadata";
import { FaHome, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  const allPosts = getPostMetadata("tips");

  return (
    <header className="md:block border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="flex justify-between py-3 px-3 items-center">
        <Link aria-label="Back to Home" href={"/"}>
          <h1 className="text-h3 text-accent hidden sm:flex">FRONTTIVINKIT</h1>
          <h1 className="text-h3 text-accent sm:hidden">FV</h1>
        </Link>
        <SearchBar postMetadata={allPosts} />
        <ul className="flex items-center space-x-6 text-light-gray">
          <li>
            <Link className="hover:text-accent" href="/about">
              <span className="hidden sm:flex">Mikä Fronttivinkit?</span>
              <span className="flex sm:hidden"><FaInfoCircle/></span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href="/">
              <span className="hidden sm:flex">Etusivu</span>
              <span className="flex sm:hidden"><FaHome/></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

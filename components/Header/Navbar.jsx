import Link from "next/link";
import SearchBar from "../Search/SearchBar";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Navbar() {
  const allPosts = getPostMetadata("tips");

  return (
    <header className="hidden md:block border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="flex justify-between py-3 px-3 items-center">
        <Link aria-label="Back to Home" href={"/"}>
          <h1 className="text-h3 text-accent">FRONTTIVINKIT</h1>
        </Link>
        <SearchBar postMetadata={allPosts} />
        <ul className="flex items-center space-x-6 text-light-gray">
          <li>
            <Link className="hover:text-accent" href="/about">
              <span className="">Mikä Fronttivinkit?</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-accent" href="/">
              <span>Etusivu</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

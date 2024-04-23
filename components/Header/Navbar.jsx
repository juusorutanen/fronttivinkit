import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";


export default function Navbar() {
  return (   
    <header className="hidden md:block border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="flex justify-between py-3 px-3 items-center">
        <Link aria-label="Back to Home" href={"/"}>
          <h1 className="text-h3 text-accent">FRONTTIVINKIT</h1>
        </Link>
        <div className="flex items-center">
        <div className="flex items-center">
        <FaMagnifyingGlass color="#F7F7F7" size={18} />
        <input className="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Etsi vinkkejä..." />
        </div>
        <ul className="flex items-center space-x-6 text-light-gray">
          <li>
          <Link className="hover:text-accent" href="/">
            <span className="">Mikä Fronttivinkit?</span>
          </Link>
         </li>
          <li>
          <Link className="hover:text-accent" href="/">
            <span>Etusivu</span>
          </Link>
          </li>
          </ul>
          </div>
      </nav>
      </header>
  );
}

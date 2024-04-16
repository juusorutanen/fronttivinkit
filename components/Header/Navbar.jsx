import Link from "next/link";

export default function Navbar() {
  return (   
    <header className="hidden md:block border-b-2 border-b-dim-gray border-opacity-30">
      <nav className="flex justify-between py-3 px-3 items-center">
        <Link aria-label="Back to Home" href={"/"}>
          <h1 className="text-h3 text-accent">DEVTIPS</h1>
        </Link>
        <div class="flex items-center">
        <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pt-0.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
        <input class="ml-2 outline-none bg-transparent font-" type="text" name="search" id="search" placeholder="Etsi vinkkejä..." />
        </div>
        <ul className="flex items-center space-x-6 text-light-gray">
          <li>
          <Link className="hover:text-accent" target="_blank" href="/">
            <span className="">Mikä Devtips?</span>
          </Link>
         </li>
          <li>
          <Link className="hover:text-accent" target="_blank" href="/">
            <span>Etusivu</span>
          </Link>
          </li>
          </ul>
          </div>
      </nav>
      </header>
  );
}

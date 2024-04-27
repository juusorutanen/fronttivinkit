import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 mb-16 sm:mb-0">
      <div className="border-b border-b-dim-gray pb-6">
        <span className="sr-only">FRONTTIVINKIT</span>
        {/* Laita logo tähän myöhemmin */}
        <h1>FRONTTIVINKIT</h1>
      </div>
      <div className="flex flex-col gap-y-12 gap-x-2 md:flex-row items-start justify-between pt-6 pb-10 text-text">
        <div className="gap-y-4 b-8 flex flex-col text-base xl:text-h6 2xl:text-h5">
          <div className="flex w-56 gap-x-1 xl:w-96 ">
            <span className="w-fit flex-nowrap whitespace-nowrap">
              Made with 💛 by {" "}
            </span>
            <Link
              className="font-bold relative overflow-y-hidden w-full group h-fit"
              target="_blank"
              href="https://www.juusorutanen.com"
            >
              <span className="flex group-hover:-translate-y-5 group-hover:opacity-0 transition-all ease-in-out-circ duration-500">
                Juuso
              </span>
              <span className="absolute inset-0 group-hover:translate-y-0 translate-y-5 xl:translate-y-8 transition-all ease-in-out-circ duration-500 underline flex-nowrap whitespace-nowrap">
                Rutanen
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

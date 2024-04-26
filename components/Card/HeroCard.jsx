import Image from "next/image";

export default function HeroCard() {
  return (
    <section className="flex flex-col md:flex-row gap-4 mt-10 mb-1 mx-auto text-text">
      <div className="flex flex-col gap-4 p-4 md:w-2/5">
        <h1 className="text-h1 text-display text-center">
          Vinkit, niksit ja tekniikat <span className="bg-gradient-to-r from-accent-purple to-white bg-clip-text text-transparent">frontend-kehitykseen</span>
        </h1>
        <h3 className="text-white mx-auto text-base text-center xl:text-h4 2xl:text-h5 leading-tight">
          Käsinpoimittuja vinkkejä uusista ja ajankohtaisista aiheista
        </h3>
      </div>
      <figure className="flex-1">
        <div className="hero-img-container relative hidden xl:block">
          <Image
            width={2000} 
            height={1000}
            priority
            src="/heroimg.svg"
          />
        </div>
      </figure>
    </section>
  );
}

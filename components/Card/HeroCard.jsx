import Link from "next/link";
import Image from "next/image";

export default function HeroCard({ post }) {
  return (
    <section className="flex flex-col md:flex-row gap-4 mt-10 mb-1 mx-auto text-text">
      <div className="flex flex-col gap-4 p-4 md:w-2/5">
        <h1 className="text-h1 text-display text-center">
          Vinkit, niksit ja tekniikat <span className="bg-text text-white px-4 py-2 rounded-lg">frontend-kehitykseen</span>
        </h1>
        <h3 className="text-text mx-auto text-base text-center xl:text-h3 2xl:text-h5">
          Käsinpoimittuja vinkkejä uusista ja ajankohtaisista aiheista
        </h3>
        {/* <span className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5">
          <Link href={`/tip/${post.slug}`} className="text-white">
            Viimeisin vinkki
          </Link>
        </span> */}
      </div>
      <figure className="flex-1">
        <div className="hero-img-container relative">
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

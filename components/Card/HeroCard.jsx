import Link from "next/link";
import Image from "next/image";

export default function HeroCard({ post }) {
  return (
    <section className="flex flex-col md:flex-row gap-4 mt-10 mb-1 mx-auto">
      <div className="flex flex-col gap-4 p-4 md:w-2/5">
        <h4 className="text-h4 text-display text-center">
          Löydä hyödyllisiä vinkkejä ohjelmointiin ja ohjelmointialalle.
        </h4>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5">
          Yksinkertaisia ja helposti sulateltavia vinkkejä frontti- ja webkehitykseen.
        </p>
        <span className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5">
          <Link href={`/tip/${post.slug}`} className="text-white">
            Viimeisin vinkki
          </Link>
        </span>
      </div>
      <figure className="flex-1">
        <div className="hero-img-container relative">
          <Image
            width={2000} 
            height={1000}
            priority
            src="/heroimg.svg"
            alt={post.title}
          />
        </div>
      </figure>
    </section>
  );
}

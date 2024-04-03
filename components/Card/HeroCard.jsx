import Link from "next/link";
import Image from "next/image";

export default function HeroCard({ post }) {
  return (
    <section className="rounded-xl flex flex-col md:flex-row gap-4 mt-10 mb-6 mx-auto">
      <div className="bg-light-gray p-4 md:w-1/3">
        <h4 className="text-h4 text-display text-center">
          Löydä hyödyllisiä vinkkejä ohjelmointiin ja ohjelmointialalle.
        </h4>
        <p className="text-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 ">
          Yksinkertaisia ja helposti sulateltavia vinkkejä frontti- ja webkehitykseen.
        </p>
        <span className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5">
          <Link href={`/tip/${post.slug}`} className="text-white">
            Viimeisimmät vinkit
          </Link>
        </span>
      </div>
      <article className="flex-1">
        <div className="hero-img-container relative">
          <div className="hero-text-overlay text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2>{post.title}</h2>
            <p className="card-desc">{post.description}</p>
          </div>
          <Image
            width={2000} 
            height={1000}
            priority
            src={post.image}
            alt={post.title}
          />
        </div>
      </article>
    </section>
  );
}

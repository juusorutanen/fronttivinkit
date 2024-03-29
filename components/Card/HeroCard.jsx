import Link from "next/link";
import Image from "next/image";

export default function HeroCard({post}) {
    return (
        <div className="flex flex-row gap-4 mt-20 mb-32">
            <section className="w-1/3 bg-light-gray flex flex-col justify-center items-center p-4 gap-5">
                <h3 className="text-h4 text-display text-center">Löydä hyödyllisiä vinkkejä ohjelmointiin ja ohjelmointialalle.</h3>
                <p className="ext-text mx-auto text-base text-center xl:text-h6 2xl:text-h5 pt-5 max-w-[50ch]">
                    Yksinkertaisia ja helposti sulateltavia vinkkejä alasta kiinnostuneille. Vinkit keskittyvät pääosin frontti- ja webkehitykseen.
                </p>
                <span className="text-bg rounded-lg font-semibold bg-gradient-to-br from-gradient to-primary group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5">
                    <Link href={`/tip/${post.slug}`}>Viimeisimmät vinkit</Link>
                </span>
            </section>
            <article className="w-2/3 relative">
                <div className="hero-img-container">
                    <div className="hero-text-overlay text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <h2>{post.title}</h2>
                        <p className="card-desc">{post.description}</p>
                    </div>
                    <Image
                        layout="responsive"
                        width={2000} // Set a large width to fill the parent container
                        height={1000} // Set a large height to maintain aspect ratio
                        src={post.image}
                        alt={post.title}
                    />
                </div>
            </article>
        </div>
    );
}


import Link from "next/link";
import Image from "next/image";

export default function HeroCard({post}) {
    return (
        <div className="hero-container">
            <section className="hero-content">
                <h1>Discover hand-picked bite-sized tips for your development needs.</h1>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type book.
                </p>
                <span>
                    <Link href={`/tip/${post.slug}`}>More recent tips</Link>
                </span>
            </section>
            <article className="hero-featured-post">
                <div className="hero-img-container">
                    <div className="hero-text-overlay">
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

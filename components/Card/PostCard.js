import Link from "next/link";
import Image from "next/image";

export default function PostCard({post}) {

    const formattedDate = new Date(post.date).toLocaleDateString();
    return (
        <Link className="unstyled" href={`/tip/${post.slug}`}>
            <div className="card">
                <div className="card-img-holder">
                    <Image width={200} height={100} src={post.image} alt={post.title}/>
                </div>
                <h3>{post.title}</h3>
                <span className="card-date">{formattedDate}</span>
                <p className="card-desc">{post.description}</p>
                <div className="card-bottom-container">
                    <span>Read more</span>
                    <div className="card-tag">{post.category}</div>
                </div>
            </div>
        </Link>
    )
}
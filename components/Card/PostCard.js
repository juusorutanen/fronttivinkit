import Link from "next/link";
import Image from "next/image";

export default function PostCard({post}) {
    const formattedDate = new Date(post.date).toLocaleDateString();
    
    return (
        <article>
        <Link href={`/tip/${post.slug}`}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-dark-charcoal text-white">
                    <div className="relative">
                        <Image
                            className="w-full"
                            width={200}
                            height={100}
                            src={post.image}
                            alt={post.title}
                        />
                    </div>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="text-gray-300 text-base mb-2">{post.description}</p>
                        <p className="text-gray-500 text-sm">{formattedDate}</p>
                    </div>
                    <div className="px-6 py-4 flex justify-between items-center">
                        <span className="font-bold text-blue-500 hover:text-blue-700">Read more</span>
                        <div className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm">{post.category}</div>
                    </div>
                </div>
        </Link>
        </article>
    );
}

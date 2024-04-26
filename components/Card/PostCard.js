import Link from "next/link";
import Image from "next/image";

export default function PostCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString();

  return (
    <article>
      <Link href={`/tip/${post.slug}`}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-dark-charcoal text-white border-2 border-transparent hover:border-light-gray">
          <div className="relative">
            <div className="overflow-hidden bg-clip-border rounded-xl p-4">
              <Image
                priority
                className="w-full"
                width={200}
                height={100}
                src={post.image}
                alt={post.title}
              />
            </div>
            <div className="absolute top-6 right-6 text-accent text-sm font-medium bg-dark-charcoal py-1 px-3">
              {post.category}
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-text text-xl mb-2">{post.title}</div>
            <p className="text-light-gray text-base mb-2">{post.description}</p>
          </div>
          <div className="px-6 py-4 flex justify-between items-center">
            <span className="font-bold text-dark-charcoal bg-accent-purple p-2 rounded-md">
              Lue lisää
            </span>
            <div className="px-3 py-1 rounded-full text-sm">
              <p className="text-gray-500 text-sm">{formattedDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

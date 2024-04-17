import Link from "next/link";
import Image from "next/image";

export default function NewPost({ post }) {
    const formattedDate = new Date(post.date).toLocaleDateString();
  return (
    <div className="bg-accent w-full absolute top-0 right-0 text-center">
      <div className="flex justify-center">
        <Image width={25} height={25} priority src="/tip.svg" />
        <Link href={`/tip/${post.slug}`} className="text-white p-4">
          <h6 className="text-h6">Viimeisin vinkki: <span className="text-dark-gray">{post.title} ({formattedDate})</span></h6>
        </Link>
      </div>
    </div>
  );
}

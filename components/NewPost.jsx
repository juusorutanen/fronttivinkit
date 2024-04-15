import Link from "next/link";

export default function NewPost({post}) {
    
  return (   
    <div className="bg-accent w-full absolute top-0 right-0 text-center">
        <Link href={`/tip/${post.slug}`} className="text-white">
            Viimeisin vinkki {post.title} 
          </Link>
    </div>
  );
}
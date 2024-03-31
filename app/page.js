import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/Card/PostCard";
import HeroCard from "@/components/Card/HeroCard";

export default function Home() {
  const postMetadata = getPostMetadata("tips");

  const latestPost = postMetadata[0];

  return (
    <main>
      <HeroCard post={latestPost} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {postMetadata.map((post, postIndex) => {
          return <PostCard key={postIndex} post={post} />;
        })}
      </div>
    </main>
  );
}

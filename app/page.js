import getPostMetadata from "@/utils/getPostMetadata";
import PostCard from "@/components/Card/PostCard";
import HeroCard from "@/components/Card/HeroCard";
import CategoryButtons from "@/components/Categories/Categories";

export default function Home({ searchParams }) {
  const { category } = searchParams;

  // Fetch all posts
  const allPosts = getPostMetadata("tips");

  // Filter posts based on the selected category
  const filteredPosts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;

  const latestPost = allPosts[0];

  return (
    <main>
      <HeroCard post={latestPost} />
      <CategoryButtons posts={allPosts} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredPosts.map((post, postIndex) => (
          <PostCard key={postIndex} post={post} />
        ))}
      </div>
    </main>
  );
}

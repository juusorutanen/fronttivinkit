import PostCard from "./PostCard";
import PaginationControls from "../Pagination/Pagination";


export default async function PostsContainer({ category, page, per_page }) {
  const {items: posts, total} = await getContent({
    content_type: "postsPage",
    skip: Number(page - 1) * Number(per_page),
    limit: Number(per_page),
    order: ["fields.title"],
    "fields.category.sys.contentType.sys.id": "categories",
    "fields.category.fields.category": category === "all" ? null : category,
  });

  
  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5">
        {posts.map((post) => {
          return <PostCard key={resource.sys.id} post={post} />;
        })}
      </div>
      <PaginationControls
        hasNextPage={posts.length === Number(per_page)}
        hasPrevPage={Number(page) > 1}
        total={total}
      />
    </>
  );
}
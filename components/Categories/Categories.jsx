"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

export default function CategoryButtons({ posts }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract category from the URL query
  const activeCategory = searchParams.get("category") || "";

  const categoryCount = {};
  if (posts) {
    posts.forEach((post) => {
      const categoryItem = post.category;
      categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
    });
  }

  return (
    // make categories to always stay at the top
    <div className="mb-8 sticky top-6 z-50 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
      <button
        aria-label="All categories"
        onClick={() => {
          router.push("/", { scroll: false });
        }}
        className={`py-2 px-4 flex gap-x-1 font-medium items-center border border-dim-gray  rounded-xl hover:border-text transition-all text-sm xl:text-h6 ${
          activeCategory === "" ? "bg-accent text-bg" : "bg-bg text-accent"
        }`}
      >
        Kaikki
      </button>
      <div className="bg-dark-gray p-1 flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
        {Object.entries(categoryCount).map(([category, count]) => {
          return (
            <button
              key={category}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/?category=${category}`, { scroll: false });
              }}
              className={`py-1 px-7 flex gap-x-1 font-medium transition-all relative ${
                activeCategory === category ? "" : "   hover:text-gray"
              }`}
            >
                {/* use motion div to create a sliding effect */}
              {activeCategory === category && (
                <motion.div
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  layoutId="active"
                  className=" absolute inset-0 bg-accent rounded-xl"
                />
              )}
              <span className="text-sm xl:text-h6 relative mix-blend-exclusion  z-10">
                {category}
              </span>
              {/* Display number of posts on top corner of each category */}
              <span className="flex relative justify-center mix-blend-exclusion z-10 items-center text-light-gray text-xxs xl:text-xs 2xl:text-sm leading-none">
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

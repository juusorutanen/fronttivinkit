"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

export default function CategoriesMobile({ posts }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const categoryCount = {};
  posts.forEach((post) => {
    const categoryItem = post.category;
    categoryCount[categoryItem] = (categoryCount[categoryItem] || 0) + 1;
  });

  const activeCategory = searchParams.get("category") || "";

  const handleCategoryChange = (category) => {
    setIsOpen(false);
    router.push(`/?category=${category}`, { scroll: false });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center gap-x-2 gap-y-2 sm:hidden z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between ${
          activeCategory === "" ? " text-accent" : ""
        }`}
      >
        {activeCategory === "" ? "Kaikki" : activeCategory}
        <span>
          <GoPlus />
        </span>
      </button>
      {isOpen && (
        <div className="absolute bottom-16 left-0 right-0 border
        border-dim-gray bg-dark-charcoal p-4 m-4 flex rounded-md flex-col gap-y-2 ">
          <button
            onClick={() => handleCategoryChange("")}
            className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm ${
              activeCategory === "" ? "bg-accent text-bg" : " bg-bg text-accent"
            }`}
          >
            Kaikki
          </button>
          {Object.entries(categoryCount).map(([category, count]) => {
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`py-4 px-4 flex gap-x-1 font-medium rounded border border-transparent hover:border-dim-gray transition-all text-sm relative ${
                  activeCategory === category
                    ? "text-bg bg-accent"
                    : "bg-bg text-accent"
                }`}
              >
                <span className="text-sm">{category}</span>
                <span
                  className={`flex justify-center items-center ${
                    activeCategory === category ? "text-bg" : "text-text"
                  } text-xxs leading-none`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Code from "@/components/codeblock";
import Link from "next/link";

function getPostContent(slug) {
  const folder = "tips/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("tips");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `DevTips ${id.replaceAll("_", " ")}`,
  };
}

export default function TipsPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main>
      <Link className="hover:text-accent" href="/">
            <span>Takaisin</span>
          </Link>
      <article>
        <Markdown
          options={{
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </main>
  );
}

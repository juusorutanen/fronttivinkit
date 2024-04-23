'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";


export default function Banner({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString();
  const [isClosed, setIsClosed] = useState(true)

  const handleClosed = () => {
    setIsClosed(false);
  }
  
  return isClosed ? (
    <div className="bg-accent w-full flex justify-center text-center mt-2 rounded-lg relative">
      <div className="flex justify-center">
        <Image width={25} height={25} priority src="/tip.svg" />
        <Link href={`/tip/${post.slug}`} className="text-white p-2">
          <h6 className="text-h6">
            Viimeisin vinkki:{" "}
            <span className="text-dark-gray">
              {post.title} ({formattedDate})
            </span>
          </h6>
        </Link>
        <button className="absolute top-1 right-1" onClick={handleClosed}>
        <FaCircleXmark size={18}/>
        </button>
      </div>
    </div>
  ) : null;
}

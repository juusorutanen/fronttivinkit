"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ postMetadata }) => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);
    filterData(input);
    setShowResults(input.length > 2);
  };

  const filterData = (input) => {
    const lowercasedInput = input.toLowerCase();
    const filteredPosts = postMetadata.filter((post) =>
      post.title.toLowerCase().includes(lowercasedInput)
    );
    setFilteredData(filteredPosts);
  };

  return (
    <form role="search" className="relative flex w-48">
      <label className="sr-only" for="search">Hakusana</label>
        <FaMagnifyingGlass
          color="#F2F2F2"
          size={18}
          className="absolute text-background top-1/2 left-1 transform -translate-y-1/2"
        />
        {/* bg-transparent removed below */}
        <input
          className="placeholder:text-gray-500 pl-[30px] p-1 outline-none w-48 bg-transparent"
          name="search"
          id="search"
          placeholder="Etsi vinkkejä..."
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
      {showResults && (
        <div className="absolute top-full left-0 w-full max-h-200 overflow-y-auto bg-dark-charcoal shadow-md z-10 p-2">
          {filteredData.length === 0 ? (
            <p className="text-white">Ei hakutuloksia...</p>
          ) : (
            filteredData.map((post) => (
              <div className="text-white" key={post.title}>
                <p>
                  <Link href={`/tip/${post.slug}`}>{post.title}</Link>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </form>
  );
};

export default SearchBar;

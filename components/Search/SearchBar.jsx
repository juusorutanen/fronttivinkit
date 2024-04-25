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
    <div className="relative flex w-96">
      <div className="relative">
        <FaMagnifyingGlass
          color="#F7F7F7"
          size={18}
          className="absolute text-background top-1/2 left-0 transform -translate-y-1/2"
        />
        <input
          className="outline-none bg-transparent pl-7 w-96"
          name="search"
          id="search"
          placeholder="Etsi vinkkejä..."
          type="text"
          onChange={handleChange}
          value={searchInput}
        />
      </div>
      {showResults && (
        <div className="absolute top-full left-0 w-full max-h-200 overflow-y-auto bg-white shadow-md z-10 p-2">
          {filteredData.length === 0 ? (
            <p className="text-accent">No results found.</p>
          ) : (
            filteredData.map((post) => (
              <div className="text-accent" key={post.title}>
                <p>
                  <Link href={`/tip/${post.slug}`}>{post.title}</Link>
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

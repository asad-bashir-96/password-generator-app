"use client";
import { ChangeEvent, useState } from "react";
import { Search } from "react-feather";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex items-center gap-1 mb-2">
      <label htmlFor="search">
        <Search className="h-5" />
      </label>
      <input
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Search passwords"
        id="search"
        type="search"
        className="border-b  w-full transition duration-150 ease-in bg-transparent border-neutral-400 focus:border-primary dark:focus:border-accent placeholder:text-neutral-400 outline-none"
      />
    </div>
  );
}

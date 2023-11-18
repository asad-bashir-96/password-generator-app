"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Password } from "@/lib/controllers";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { Search } from "react-feather";
import { SavedPassword } from "./SavedPassword";

type SavedPasswordsWrapperProps = {
  items: Password[];
  length: number;
};

export function SavedPasswordsWrapper({
  items,
  length,
}: SavedPasswordsWrapperProps) {
  const [parent] = useAutoAnimate();
  const [filteredItems, setFilteredItems] = useState(items);

  return (
    <div
      ref={parent}
      className="flex flex-col  divide-y divide-gray-200 dark:divide-accent/50"
    >
      <div className="flex mb-4 justify-between">
        <p className="sm:text-xl text-lg font-extralight">{`${length} password saved`}</p>
        <SearchBar initialItems={items} setFilteredItems={setFilteredItems} />
      </div>

      {filteredItems.length ? (
        filteredItems.map((item) => (
          <SavedPassword
            id={item.id}
            password={item.secret}
            title={item.title}
            key={item.id}
          />
        ))
      ) : (
        <p className="text-center text-2xl font-extralight py-3">
          no results found
        </p>
      )}
    </div>
  );
}

type SearchBarProps = {
  initialItems: Password[];
  setFilteredItems: Dispatch<
    SetStateAction<
      {
        title: string;
        userId: string;
        id: number;
        secret: string;
      }[]
    >
  >;
};
export function SearchBar({ setFilteredItems, initialItems }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const newQuery = e.target.value.toLowerCase();
    console.log(newQuery);

    setQuery(newQuery);

    setFilteredItems(() => {
      if (!newQuery) {
        return initialItems; // Reset to the initial items when the query is empty
      }

      return initialItems.filter((item) =>
        item.title.toLowerCase().includes(newQuery)
      );
    });
  }

  return (
    <div className="flex bg-primary/5  dark:bg-secondaryDark py-2 px-4 rounded-full items-center">
      <Search className="stroke-primary  dark:stroke-accent" />
      <input
        onChange={onChange}
        value={query}
        type="search"
        placeholder="Search..."
        className="bg-transparent border-b font-light border-primary dark:border-accent placeholder:text-gray-600 outline-none"
      />
    </div>
  );
}

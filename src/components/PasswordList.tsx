import { Search } from "react-feather";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { getPasswordById } from "@/lib/controllers";
import SavedPassword from "./SavedPassword";

export default async function PasswordList() {
  const { userId } = auth();
  const data = await getPasswordById(String(userId));
  return (
    <div className="flex gap-5 p-4  mb-20  rounded bg-secondary dark:text-slate-200  flex-col w-4/5 max-w-4xl">
      <div className="flex justify-between">
        <p>{`${data?.length} password saved`}</p>

        <div className="flex items-center gap-1 mb-2">
          <label htmlFor="search">
            <Search className="h-5" />
          </label>
          <input
            placeholder="Search passwords"
            id="search"
            type="search"
            className="border-b  w-full transition duration-150 ease-in bg-transparent border-neutral-400 focus:border-accent placeholder:text-neutral-400 outline-none"
          />
        </div>
      </div>
      <div className="divide-y">
        {data?.map((entry, index) => (
          <SavedPassword
            id={entry.id}
            key={index}
            secret={entry.secret}
            title={entry.title}
          />
        ))}
      </div>

      <Link
        href="/new-password"
        className="bg-primary mt-4 relative text-center hover:bg-primary/80 transition ease-in duration-100  capitalize py-3 px-2 rounded text-white"
      >
        Add New Password
      </Link>
    </div>
  );
}

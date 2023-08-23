import Link from "next/link";
import SavedPassword from "./SavedPassword";
import { getAllPasswordsByUserId } from "@/lib/controllers";
import { auth } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

export default async function PasswordList() {
  const { userId } = auth();
  const data = await getAllPasswordsByUserId(String(userId));

  return (
    <div className="flex gap-5 p-4   mb-20  rounded bg-secondary dark:text-slate-200  flex-col w-4/5 max-w-4xl">
      <div className="flex justify-between">
        <p>{`${data?.length} password saved`}</p>
        <SearchBar />
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

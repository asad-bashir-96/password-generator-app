import Link from "next/link";
import SavedPassword from "./SavedPassword";
import { getAllPasswordsByUserId } from "@/lib/controllers";
import { auth } from "@clerk/nextjs";
import SearchBar from "./SearchBar";

export default async function PasswordList() {
  const { userId } = auth();
  const data = await getAllPasswordsByUserId(String(userId));

  return (
    <div className="flex gap-5 px-8 py-10 shadow-md bg-white dark:border-accent/50 dark:shadow-slate-900 border  rounded-lg dark:bg-secondary  flex-col w-4/5 max-w-4xl">
      <h2 className="text-center mb-3 font-extralight text-2xl">
        manage saved passwords
      </h2>
      <div className="flex justify-between">
        <p className="text-xl">{`${data?.length} password saved`}</p>
        <SearchBar />
      </div>
      <div className="flex flex-col divide-y divide-gray-200 dark:divide-accent/50">
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

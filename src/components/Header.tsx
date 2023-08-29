import Link from "next/link";

import { auth, UserButton } from "@clerk/nextjs";
export default function Header() {
  const { userId } = auth();

  return (
    <header className="text-slate-200 bg-primary dark:bg-secondary shadow-md mb-2 dark:shadow-accent/50 shadow-primary/70 md:text-2xl text-xl">
      <div className="container p-6 flex items-center justify-end mx-auto">
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <ul className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className="cursor-pointer  p-2 transition ease-in duration-150 hover:text-accent dark:hover:text-primary"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-accent   hover:text-primary   border-primary dark:border-accent/5  border dark:hover:border-accent/50 dark:bg-accent dark:hover:border-accent dark:hover:bg-accent/5 dark:hover:text-primary  text-white relative  transition ease-in duration-100 p-2  capitalize sm:py-3 sm:px-2 rounded"
            >
              Sign Up
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

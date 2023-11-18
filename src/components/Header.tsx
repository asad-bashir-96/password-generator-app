import Link from "next/link";

import { auth, UserButton } from "@clerk/nextjs";
export function Header() {
  const { userId } = auth();

  return (
    <header className="text-slate-200 bg-secondaryPrimary dark:bg-secondary shadow-md mb-2 dark:shadow-accent/50 shadow-primary/70 md:text-2xl text-xl">
      <div className="container p-6 flex items-center justify-end mx-auto">
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <ul className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className="cursor-pointer  p-2 transition ease-in duration-150 hover:text-primary dark:hover:text-accent"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-white hover:text-primary hover:bg-accentLight shadow shadow-primary dark:shadow-accent   border-primary dark:border-accent/5  border dark:hover:border-accent/50 dark:bg-accent dark:hover:border-accent dark:hover:bg-accent/5 dark:hover:text-primary  text-white   transition ease-in duration-100  rounded"
            >
              <p className="bg-primary dark:bg-accent transition ease-in duration-100  hover:bg-accent/5 p-2  capitalize sm:py-3 sm:px-2 h-full w-full">
                Sign Up
              </p>
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

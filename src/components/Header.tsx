import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";
export default function Header() {
  const { userId } = auth();

  return (
    <header className="text-slate-200 bg-primary dark:bg-secondary shadow-md mb-2 dark:shadow-accent/50 shadow-primary/70 md:text-2xl text-xl">
      <div className="container p-6 flex items-center justify-between mx-auto">
        <Link href={"/"}>
          <p>LOGO</p>
        </Link>
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <ul className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className="cursor-pointer transition ease-in duration-150 hover:text-accent dark:hover:text-primary"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="dark:bg-primary bg-accent hover:text-primary  dark:hover:text-accent transition ease-in duration-150 cursor-pointer px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

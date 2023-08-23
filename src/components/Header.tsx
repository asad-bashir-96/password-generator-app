import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function Header() {
  const { userId } = auth();

  return (
    <header className="text-slate-200 bg-secondary  shadow-md shadow-primary/70 text-xl">
      <div className="container p-6 flex items-center justify-between mx-auto">
        <p>LOGO</p>
        {userId ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <ul className="flex items-center gap-6">
            <Link
              href="/sign-in"
              className="cursor-pointer transition ease-in duration-150 hover:text-accent"
            >
              Sign In
            </Link>
            <Link
              href="/sign-up"
              className="bg-primary shadow-lg shadow-primary/90  hover:text-accent transition ease-in duration-150 cursor-pointer px-4 py-2 rounded"
            >
              Sign Up
            </Link>
          </ul>
        )}
      </div>
    </header>
  );
}

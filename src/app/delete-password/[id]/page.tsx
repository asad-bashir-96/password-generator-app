import Header from "@/components/Header";
import { db } from "../../../..";
import { entries } from "@/db/schema";
import { eq } from "drizzle-orm";

import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  async function deletePassword(data: FormData) {
    "use server";
    const id = Number(data.get("id"));
    await db.delete(entries).where(eq(entries.id, id));
    console.log("deleted password");
    redirect("/");
  }
  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <form
        action={deletePassword}
        className="bg-secondaryDark shadow-lg  z-10 text-slate-200 modal-box"
      >
        <h3 className="text-3xl">Delete password</h3>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-xl">
            Are you sure you want to delete this password?
          </p>
          <input type="text" hidden name="id" defaultValue={params.id} />
        </div>

        <div className="flex justify-between mt-5 ">
          <Link
            href="/"
            type="button"
            className="w-20 p-3 hover:text-primary transition duration-150 ease-in rounded bg-accent text-slate-200"
          >
            Cancel
          </Link>
          <button className="w-20 rounded transition duration-150 ease-in hover:text-accent bg-primary text-slate-200">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

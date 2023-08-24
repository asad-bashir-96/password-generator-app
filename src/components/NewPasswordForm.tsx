"use client";
import { addPassword } from "@/lib/actions";
import Link from "next/link";
export default function NewPasswordForm() {
  return (
    <form
      action={addPassword}
      className="bg-secondaryDark shadow-md shadow-accent/40  z-10 text-slate-200 w-[500px] modal-box"
    >
      <h3 className="text-3xl">Create new password</h3>
      <div className="flex flex-col gap-2 mt-5">
        <label className="text-xl block">Title</label>
        <input
          className="p-1  text-black text-xl bg-white  w-80 rounded border mb-2  focus:outline-accent"
          type="text"
          name="title"
          id="title"
        />
        <label className="text-xl block">Password</label>
        <input
          className="p-1  text-black text-xl bg-white  w-80 rounded border mb-2  focus:outline-accent"
          type="password"
          name="password"
          id="password"
        />
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
          Submit
        </button>
      </div>
    </form>
  );
}

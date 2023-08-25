"use client";
import { editPassword } from "@/lib/actions";
import Link from "next/link";

type EditPasswordFormProps = {
  id: number;
};
export default function EditPasswordForm({ id }: EditPasswordFormProps) {
  return (
    <form
      action={editPassword}
      className="dark:bg-secondaryDark text-black bg-white shadow-lg  z-10 dark:text-slate-200 py-10 px-20 rounded-lg"
    >
      <h3 className="text-3xl">Edit saved password</h3>
      <div className="flex flex-col gap-4 mt-5">
        <label className="block text-lg" htmlFor="newpassword">
          Enter new password
        </label>

        <input type="text" hidden name="id" defaultValue={id} />

        <input
          className="p-1  text-black text-xl bg-white  w-80 rounded border mb-2  focus:outline-accent"
          type="password"
          name="newpassword"
          id="newpassword"
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
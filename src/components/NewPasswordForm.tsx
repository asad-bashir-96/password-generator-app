"use client";
import { addPassword } from "@/lib/actions";
export default function NewPasswordForm() {
  return (
    <form
      className="border  p-6 rounded-md text-black font-medium  bg-neutral-100"
      action={addPassword}
    >
      <h2 className="text-3xl text-center mb-8">Store your password</h2>
      <div className="flex flex-col gap-2">
        <label className="block text-sm" htmlFor="title">
          Title
        </label>

        <input
          className="p-1 w-80 rounded border border-gray-300 focus:outline-accent"
          type="text"
          name="title"
          id="title"
        />
        <label className="block text-sm" htmlFor="password">
          Password
        </label>
        <input
          className="p-1 w-80 rounded border border-gray-300 focus:outline-accent"
          type="password"
          name="password"
          id="password"
        />
        <button className="bg-accent py-2 px-4 mt-2 rounded text-white">
          Continue
        </button>
      </div>
    </form>
  );
}

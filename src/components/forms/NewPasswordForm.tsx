"use client";
import { addPassword } from "@/lib/actions";
export default function NewPasswordForm() {
  return (
    <form
      action={addPassword}
      className="dark:bg-secondaryDark border-gray-200 dark:border-accent/50 border  bg-white  shadow-md shadow-accent/40   dark:text-slate-200  py-10 px-16 rounded-lg"
    >
      <h3 className="text-3xl font-extralight mb-8">Create new password</h3>
      <fieldset className="flex flex-col gap-2 mt-5">
        <label htmlFor="title" className="text-xl block">
          Title
        </label>
        <input
          className="p-1 w-full  shadow outline-none  ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800  rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="password" className="text-xl block">
          Password
        </label>
        <input
          className="p-1 w-full shadow outline-none ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800   rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
          type="password"
          name="password"
          id="password"
        />
        <div className="w-full flex justify-end ">
          <button className="mt-3 py-3 border border-primary dark:border-accent/50  px-4 rounded transition duration-150 ease-in dark:hover:border-accent dark:hover:bg-accent/5 dark:hover:text-primary hover:text-accent dark:bg-accent bg-primary text-slate-200">
            Create
          </button>
        </div>
      </fieldset>
    </form>
  );
}

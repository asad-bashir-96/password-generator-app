"use client";
import { useState, useTransition, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { addPassword } from "@/lib/actions";

export default function AddPasswordModal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) return;
    setIsDialogOpen(false);
  }, [isPending]);

  async function onSubmit(formData: FormData) {
    startTransition(() => {
      addPassword(formData);
    });
  }

  return (
    <Dialog.Root
      open={isDialogOpen}
      onOpenChange={() =>
        isDialogOpen ? setIsDialogOpen(false) : setIsDialogOpen(true)
      }
    >
      <Dialog.Overlay className="fixed flex justify-center items-center  inset-0 z-50 bg-black bg-opacity-50">
        <Dialog.Content>
          <form
            action={onSubmit}
            className="dark:bg-secondaryDark  border-gray-200 dark:border-accent/50 border  bg-white  shadow-md shadow-accent/40   dark:text-slate-200  py-10 px-16 rounded-lg"
          >
            <h3 className="text-3xl font-extralight mb-8">
              Create new password
            </h3>
            <fieldset className="flex flex-col gap-2 mt-5">
              <label htmlFor="title" className="text-xl block">
                Title
              </label>
              <input
                required
                className="p-1 w-full  shadow outline-none  ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800  rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
                type="text"
                name="title"
                id="title"
              />
              <label htmlFor="password" className="text-xl block">
                Password
              </label>
              <input
                required
                className="p-1 w-full shadow outline-none ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800   rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
                type="password"
                name="password"
                id="password"
              />
            </fieldset>
            <div className="w-full flex justify-end ">
              <button className="mt-3 py-3 border border-primary dark:border-accent/50  px-4 rounded transition duration-150 ease-in dark:hover:border-accent dark:hover:bg-accent/5 dark:hover:text-primary hover:text-accent dark:bg-accent bg-primary text-slate-200">
                Create
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Overlay>
      <Dialog.Trigger asChild>
        <button className="mt-3 py-3  hover:text-primary hover:bg-accent/5  border border-primary dark:border-accent/50  px-4 rounded transition duration-150 ease-in dark:hover:border-accent/50 dark:hover:bg-accent/5 dark:hover:text-primary  dark:bg-accent bg-primary text-white">
          Add Password
        </button>
      </Dialog.Trigger>
    </Dialog.Root>
  );
}

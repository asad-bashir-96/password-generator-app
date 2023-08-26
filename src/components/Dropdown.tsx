import { useState, useTransition, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Edit, MoreVertical } from "react-feather";

import { editPassword, deletePassword } from "@/lib/actions";
type DialogType = "edit" | "delete";

type DropdownProps = {
  id: number;
};

export default function Dropdown({ id }: DropdownProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [type, setType] = useState<DialogType>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (isPending) return;
    setIsDialogOpen(false);
  }, [isPending]);

  async function onDeleteSubmit(formData: FormData) {
    startTransition(() => {
      deletePassword(formData);
    });
  }

  async function onEditSubmit(formData: FormData) {
    startTransition(() => {
      editPassword(formData);
    });
  }

  function Form() {
    switch (type) {
      case "edit":
        return <EditPasswordForm id={id} />;

      case "delete":
        return <DeletePasswordForm id={id} />;
    }
  }
  function EditPasswordForm({ id }: DropdownProps) {
    return (
      <form
        action={onEditSubmit}
        className="dark:bg-secondaryDark outline-none border-gray-200 dark:border-accent/50 border  bg-white  shadow-md shadow-accent/40   dark:text-slate-200  py-10 px-16 rounded-lg"
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
          <button
            onClick={() => setIsDialogOpen(false)}
            type="button"
            className="w-20 p-3 hover:text-primary transition duration-150 ease-in rounded bg-accent text-slate-200"
          >
            Cancel
          </button>
          <button className="w-20 rounded transition duration-150 ease-in hover:text-accent bg-primary text-slate-200">
            Save
          </button>
        </div>
      </form>
    );
  }

  function DeletePasswordForm({ id }: DropdownProps) {
    return (
      <form
        action={onDeleteSubmit}
        className="dark:bg-secondaryDark border-gray-200 dark:border-accent/50 border  bg-white  shadow-md shadow-accent/40   dark:text-slate-200  py-10 px-16 rounded-lg"
      >
        <h3 className="text-3xl">Delete password</h3>
        <div className="flex flex-col gap-4 mt-5">
          <p className="text-xl">
            Are you sure you want to delete this password?
          </p>
          <input type="text" hidden name="id" defaultValue={id} />
        </div>

        <div className="flex justify-between mt-5 ">
          <button
            onClick={() => setIsDialogOpen(false)}
            type="button"
            className="w-20 p-3 hover:text-primary transition duration-150 ease-in rounded bg-accent text-slate-200"
          >
            Cancel
          </button>
          <button className="w-20 rounded transition duration-150 ease-in hover:text-accent bg-primary text-slate-200">
            Delete
          </button>
        </div>
      </form>
    );
  }

  function openDialog(type: DialogType) {
    switch (type) {
      case "edit":
        setType("edit");
        break;
      case "delete":
        setType("delete");
        break;
    }
    setIsDialogOpen(true);
  }

  function closeDialog() {
    setIsDialogOpen(false);
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical className="h-5 cursor-pointer transition ease-in-out duration-300 hover:text-accent" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="  translate-y-3 transition w-28 duration-150 ease-in-out rounded bg-secondaryDark shadow shadow-accent/70 flex flex-col text-slate-200">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="outline-none">
            <li
              onClick={() => openDialog("edit")}
              className="flex rounded py-4 transition ease-in px-2 duration-150 hover:bg-accent/60 items-center cursor-pointer justify-between"
            >
              <Edit className="h-5" />
              <p>Edit</p>
            </li>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <li
              onClick={() => openDialog("delete")}
              className="flex rounded py-4 transition ease-in px-2 duration-150 hover:bg-accent/60 items-center cursor-pointer justify-between"
            >
              <Edit className="h-5" />
              <p>Delete</p>
            </li>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>

      <Dialog.Root open={isDialogOpen} onOpenChange={closeDialog}>
        <Dialog.Overlay className="fixed flex justify-center items-center  inset-0 z-50 bg-black bg-opacity-50">
          <Dialog.Content>
            <Form />
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Root>
    </DropdownMenu.Root>
  );
}

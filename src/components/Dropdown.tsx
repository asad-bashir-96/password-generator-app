import { useState, useTransition, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Dialog from "@radix-ui/react-dialog";
import { Edit, MoreVertical } from "react-feather";
import { Eye, EyeOff } from "react-feather";
import { editPassword, deletePassword } from "@/lib/actions";
import { toast } from "sonner";
type DialogType = "edit" | "delete";

type DropdownProps = {
  id: number;
  password?: string;
  title?: string;
};

export function Dropdown({ id, title, password }: DropdownProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [type, setType] = useState<DialogType>();
  const [isPending, startTransition] = useTransition();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    if (isPending) return;
    setIsDialogOpen(false);
  }, [isPending]);

  async function onDeleteSubmit(formData: FormData) {
    try {
      startTransition(async () => {
        await deletePassword(formData);
        toast.success("Password successfully deleted");
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  }

  async function onEditSubmit(formData: FormData) {
    try {
      startTransition(async () => {
        await editPassword(formData);
        toast.success("Password successfully edited");
      });
    } catch (e) {
      toast.error("Something went wrong");
    }
  }

  function Form() {
    switch (type) {
      case "edit":
        return <EditPasswordForm title={title} password={password} id={id} />;

      case "delete":
        return <DeletePasswordForm id={id} />;
    }
  }
  function EditPasswordForm({ id, title, password }: DropdownProps) {
    return (
      <form
        action={onEditSubmit}
        className="dark:bg-secondaryDark outline-none border-gray-200 dark:border-accent/50 border  bg-white  shadow-md shadow-accent/40   dark:text-slate-200  py-10 px-16 rounded-lg"
      >
        <h3 className="text-3xl">Edit saved password</h3>
        <div className="flex flex-col gap-4 mt-5">
          <label className="block text-lg" htmlFor="title">
            Edit Title
          </label>

          <input
            required
            className="p-1 w-full shadow outline-none ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800   rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
            type="text"
            name="title"
            defaultValue={title}
          />

          <label className="block text-lg" htmlFor="newpassword">
            Edit Password
          </label>

          <div className="relative">
            <input
              required
              className="p-1 w-full shadow outline-none ring-2 ring-primary/90 dark:ring-accent/50  text-xl bg-white dark:bg-neutral-800   rounded  mb-2 focus:outline-primary  dark:focus:outline-accent"
              type={isPasswordVisible ? "text" : "password"}
              name="newpassword"
              id="newpassword"
              defaultValue={password}
            />
            {isPasswordVisible ? (
              <button>
                <Eye
                  className="h-5 absolute -right-9  top-1/4 transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              </button>
            ) : (
              <button>
                <EyeOff
                  className="h-5 absolute -right-9  top-1/4 transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent"
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                />
              </button>
            )}
          </div>

          <input type="text" hidden name="id" defaultValue={id} />

          <div className="flex justify-between">
            <span
              className={`loading-spinner loading-lg text-primary dark:text-accent ${
                isPending ? "loading" : ""
              }`}
            />
            <button
              disabled={isPending}
              className="bg-primary w-20 hover:text-primary hover:bg-accent/5  border-primary dark:border-accent/5  border dark:hover:border-accent/50 dark:bg-accent dark:hover:border-accent  dark:hover:bg-accent/5 dark:hover:text-primary  text-white  relative  transition ease-in duration-100 p-2  capitalize sm:py-3 sm:px-2 rounded"
            >
              Edit
            </button>
          </div>
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
        <div className="flex flex-col gap-6 mt-5">
          <p className="text-xl">
            Are you sure you want to{" "}
            <span className="text-primary font-semibold">delete</span> this
            password?
          </p>
          <p>
            Password is associated with{" "}
            <span className="text-primary text-xl">title</span>
          </p>

          <div className="flex justify-between">
            <span
              className={`loading-spinner loading-lg text-primary dark:text-accent ${
                isPending ? "loading" : ""
              }`}
            />

            <button
              disabled={isPending}
              className="bg-primary w-20 hover:text-primary hover:bg-accent/5  border-primary dark:border-accent/5  border dark:hover:border-accent/50 dark:bg-accent dark:hover:border-accent  dark:hover:bg-accent/5 dark:hover:text-primary  text-white  relative  transition ease-in duration-100 p-2  capitalize sm:py-3 sm:px-2 rounded"
            >
              Delete
            </button>
          </div>
          <input type="text" hidden name="id" defaultValue={id} />
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
        <MoreVertical className="h-5 cursor-pointer transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="  translate-y-3 transition w-28 duration-150 ease-in-out rounded bg-white dark:bg-secondaryDark shadow shadow-gray-400 dark:shadow-accent/70 flex flex-col text-black dark:text-slate-200">
        <DropdownMenu.Group>
          <DropdownMenu.Item className="outline-none">
            <li
              onClick={() => openDialog("edit")}
              className="flex bg-primary/5 rounded py-4 transition ease-in px-2 duration-150 hover:bg-primary hover:text-slate-200 dark:hover:bg-accent/60 items-center cursor-pointer justify-between"
            >
              <Edit className="h-5" />
              <p>Edit</p>
            </li>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <li
              onClick={() => openDialog("delete")}
              className="flex bg-primary/5 rounded py-4 transition ease-in px-2 duration-150 hover:bg-primary hover:text-slate-200 dark:hover:bg-accent/60 items-center cursor-pointer justify-between"
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

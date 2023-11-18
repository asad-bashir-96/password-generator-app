import { Password } from "@/lib/controllers";
import { AddPasswordModal } from "./AddPasswordModal";
import { SavedPasswordsWrapper } from "./SavedPasswordsWrapper";

type PasswordListProps = {
  data: Password[];
};

export async function PasswordList({ data }: PasswordListProps) {
  return (
    <div className="flex px-8 py-10 shadow-md bg-white dark:border-accent/50 dark:shadow-slate-900 border  rounded-lg dark:bg-secondary  flex-col w-4/5 max-w-4xl">
      <h2 className="text-center mb-10 font-extralight text-2xl">
        manage saved passwords
      </h2>
      <SavedPasswordsWrapper length={data.length} items={data} />

      <AddPasswordModal />
    </div>
  );
}

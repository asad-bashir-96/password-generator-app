import SavedPassword from "./SavedPassword";
import { getAllPasswordsByUserId } from "@/lib/controllers";
import { auth } from "@clerk/nextjs";
import AddPasswordModal from "./AddPasswordModal";

import SavedPasswordsWrapper from "./SavedPasswordsWrapper";
export default async function PasswordList() {
  const { userId } = auth();
  const data = await getAllPasswordsByUserId(String(userId));

  return (
    <div className="flex gap-5 px-8 py-10 shadow-md bg-white dark:border-accent/50 dark:shadow-slate-900 border  rounded-lg dark:bg-secondary  flex-col w-4/5 max-w-4xl">
      <h2 className="text-center mb-3 font-extralight text-2xl">
        manage saved passwords
      </h2>
      <p className="sm:text-xl text-lg font-extralight">{`${data?.length} password saved`}</p>

      <SavedPasswordsWrapper>
        {data?.map((entry, index) => (
          <SavedPassword
            id={entry.id}
            key={index}
            password={entry.secret}
            title={entry.title}
          />
        ))}
      </SavedPasswordsWrapper>

      <AddPasswordModal />
    </div>
  );
}

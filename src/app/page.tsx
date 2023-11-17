import PasswordList from "@/components/PasswordList";
import PasswordGenerator from "@/components/PasswordGenerator";
import generator from "generate-password-ts";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import EmptySvg from "../../public/empty.svg";
export default function Home() {
  const { userId } = auth();

  const initialSettings = {
    length: 10,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
    strict: true,
  };
  const initialPassword = generator.generate(initialSettings);
  return (
    <div className="min-h-screen  relative text-black dark:text-slate-200 dark:bg-slate-900   flex gap-14  flex-col ">
      <section className="container flex flex-col gap-5 items-center mx-auto">
        <h1 className="sm:text-4xl font-light  leading-normal  text-3xl md:text-5xl  text-center my-6   capitalize">
          password management system
        </h1>

        <PasswordGenerator
          initialSettings={initialSettings}
          initialPassword={initialPassword}
        />
      </section>
      <main className=" container mx-auto flex-grow  flex flex-col items-center gap-6">
        {userId ? (
          <PasswordList />
        ) : (
          <>
            <Image
              className="h-48  rounded-full shadow w-fit"
              alt="must be signed in to manage passwords"
              src={EmptySvg}
            />
            <p className="sm:text-3xl text-2xl md:text-4xl  leading-normal text-center">
              sign in to manage passwords
            </p>
          </>
        )}
      </main>
    </div>
  );
}

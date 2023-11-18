import { PasswordList } from "@/components/PasswordList";
import { PasswordGenerator } from "@/components/PasswordGenerator";
import generator from "generate-password-ts";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import EmptySvg from "../../public/empty.svg";
import { Suspense } from "react";
import { getAllPasswordsByUserId } from "@/lib/controllers";
import { PasswordListFallBack } from "@/components/PasswordListFallBack";
export default async function Home() {
  const { userId } = auth();
  const data = await getAllPasswordsByUserId(String(userId));

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
        <PasswordGenerator
          initialSettings={initialSettings}
          initialPassword={initialPassword}
        />
      </section>
      <main className=" container mx-auto flex-grow  flex flex-col items-center gap-6">
        {userId ? (
          <Suspense fallback={<PasswordListFallBack data={data} />}>
            <PasswordList data={data} />
          </Suspense>
        ) : (
          <>
            <Image
              className="h-48 rounded-full shadow w-fit"
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

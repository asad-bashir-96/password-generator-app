import { SignIn, auth } from "@clerk/nextjs";
import Image from "next/image";
import redirectSvg from "../../../../public/redirect.svg";
export default function Page() {
  const { userId } = auth();
  return (
    <div className="w-full   flex justify-center items-center">
      <div className="p-20">
        <SignIn signUpUrl="/sign-up" />
        <div className={`${userId ? "" : "hidden"} flex flex-col gap-10`}>
          <Image
            className="h-72 rotate-90"
            src={redirectSvg}
            alt="redirecting to home page"
          />
          <p className="text-black max-w-[35ch] leading-loose text-center dark:text-slate-200 text-4xl">
            you are already signed in, redirecting you to the home page
          </p>
        </div>
      </div>
    </div>
  );
}

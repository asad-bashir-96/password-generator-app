import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full   flex justify-center items-center">
      <div className="p-20">
        <SignIn signUpUrl="/sign-up" />
      </div>
    </div>
  );
}

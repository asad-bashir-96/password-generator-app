import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="w-full   h-full overflow-y-hidden flex justify-center ">
      <div className="p-20">
        <SignUp afterSignUpUrl="/" signInUrl="/sign-in" />
      </div>
    </div>
  );
}

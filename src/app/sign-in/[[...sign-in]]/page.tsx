import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <SignIn signUpUrl="/sign-up" />
    </div>
  );
}

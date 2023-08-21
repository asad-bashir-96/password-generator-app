import { SignUp } from "@clerk/nextjs";
export default function Page() {
  return (
    <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
      <SignUp afterSignUpUrl='/' signInUrl="/sign-in" />
    </div>
  );
}

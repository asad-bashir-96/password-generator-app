import PasswordList from "@/components/PasswordList";
import PasswordGenerator from "@/components/PasswordGenerator";
import generator from "generate-password-ts";
import { auth } from "@clerk/nextjs";
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
    <div className="min-h-screen relative bg-slate-900  flex  flex-col ">
      <section>
        <PasswordGenerator
          initialSettings={initialSettings}
          initialPassword={initialPassword}
        />
      </section>
      <main className=" container mx-auto flex-grow  flex items-center justify-center ">
        {userId ? <PasswordList /> : <p>sign in to store passwords</p>}
      </main>
    </div>
  );
}

import PasswordList from "@/components/PasswordList";
import Header from "@/components/Header";
import PasswordGenerator from "@/components/PasswordGenerator";
import generator from "generate-password-ts";
import { getUsers } from "@/lib/db";
export default async function Home() {
  const data = await getUsers();
  console.log(data);

  const initialSettings = {
    length: 8,
    numbers: true,
    lowercase: true,
    uppercase: true,
    symbols: false,
    strict: true,
  };
  const initialPassword = generator.generate(initialSettings);
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />
      <PasswordGenerator
        initialSettings={initialSettings}
        initialPassword={initialPassword}
      />
      <main className=" container mx-auto flex-grow  flex items-center justify-center ">
        <PasswordList />
        <h1>{data?.email}</h1>
      </main>
    </div>
  );
}

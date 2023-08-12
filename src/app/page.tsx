import PasswordList from "@/components/PasswordList";
import Header from "@/components/Header";
import PasswordGenerator from "@/components/PasswordGenerator";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Header />
      <PasswordGenerator />
      <main className=" container mx-auto flex-grow  flex items-center justify-center ">
        <PasswordList />
      </main>
    </div>
  );
}

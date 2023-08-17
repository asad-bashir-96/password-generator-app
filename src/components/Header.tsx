export default function Header() {
  return (
    <header className="text-slate-200 shadow-lg shadow-primary/50 text-xl">
      <div className="container p-6 flex items-center justify-between mx-auto">
        <p>LOGO</p>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer transition ease-in duration-150 hover:text-accent">
            Sign In
          </li>
          <li className="bg-primary shadow-lg shadow-primary/90  hover:text-accent transition ease-in duration-150 cursor-pointer px-4 py-2 rounded">
            Sign Up
          </li>
        </ul>
      </div>
    </header>
  );
}

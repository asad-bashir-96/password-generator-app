export default function Header() {
  return (
    <header className="text-slate-200 shadow-lg shadow-primary/50 text-xl">
      <div className="container p-6 flex items-center justify-between mx-auto">
        <p>LOGO</p>
        <ul className="flex items-center gap-6">
          <li className="">Sign In</li>
          <li className="bg-primary px-4 py-2 rounded">Sign Up</li>
        </ul>
      </div>
    </header>
  );
}

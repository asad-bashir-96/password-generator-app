export default function Header() {
  return (
    <header className="bg-teal-800 text-lg">
      <div className="w-4/5 p-6 flex justify-between mx-auto">
        <p>LOGO</p>
        <ul className="flex gap-6">
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </header>
  );
}

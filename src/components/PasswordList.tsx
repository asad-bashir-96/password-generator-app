import { Copy, Search } from "react-feather";
export default function PasswordList() {
  return (
    <div className="flex gap-5 p-4 w-4/5 mb-20  rounded bg-white border-2 border-gr flex-col max-w-4xl">
      <div className=" flex justify-between">
        <p>1 passwords saved</p>
        <form>
          <div className="flex items-center gap-1 mb-5">
            <label htmlFor="search">
              <Search className="" />
            </label>
            <input
              placeholder="Search passwords"
              id="search"
              type="search"
              className="border-b border-neutral-400 focus:border-b-red-500 placeholder:text-neutral-400 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="flex  justify-between">
        <p>amazon</p>
        <button>
          <Copy />
        </button>
      </div>
    </div>
  );
}

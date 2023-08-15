import { Copy, Search, Trash2, Edit3 } from "react-feather";
export default function PasswordList() {
  return (
    <div className="flex gap-5 p-4  mb-20  rounded bg-white dark:bg-secondary dark:text-slate-200  flex-col w-4/5 max-w-4xl">
      <div className=" flex justify-between">
        <p>1 passwords saved</p>
        <form>
          <div className="flex items-center gap-1 mb-5">
            <label htmlFor="search">
              <Search className="h-5" />
            </label>
            <input
              placeholder="Search passwords"
              id="search"
              type="search"
              className="border-b border-0 w-full block bg-transparent border-gray-200 focus:border-accent placeholder:text-neutral-400 outline-none"
            />
          </div>
        </form>
      </div>
      <div className="flex  justify-between">
        <p>amazon</p>
        <button>
          <Copy className="h-5" />
        </button>
      </div>
    </div>
  );
}

export default function PasswordGenerator() {
  return (
    <div className="border py-2 font-light border-red-200 bg-pink-300 ">
      <div className="w-4/5 flex flex-col gap-5 items-center mx-auto border border-red-500">
        <h1 className="text-3xl  capitalize">
          never worry about password management ever again
        </h1>
        <h2 className="text-center text-xl ">password settings</h2>
        <div className="w-[700px] h-56 bg-blue-50"></div>
        <button className="bg-cyan-800 p-4 rounded-full text-white">
          generate password
        </button>
      </div>
    </div>
  );
}

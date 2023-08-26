"use client";
import { useState } from "react";
import { Eye, Copy, EyeOff } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "./Dropdown";
type SavedPasswordProps = {
  title: string;
  secret: string;
  id: number;
};

export default function SavedPassword({
  title,
  secret,
  id,
}: SavedPasswordProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="flex flex-col odd:bg-primary/5 odd:shadow dark:odd:bg-accent/5  rounded-sm gap-2  p-2">
      <p className="select-none font-extralight text-xl capitalize  ">
        {title}
      </p>

      <div className="flex justify-between  w-full  ">
        <input
          disabled
          className="bg-transparent flex w-full rounded   focus:outline-none "
          type={isPasswordVisible ? "text" : "password"}
          defaultValue={secret}
        />

        <div className="flex  justify-between  items-center  gap-1">
          {isPasswordVisible ? (
            <button>
              <EyeOff
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="h-5  transition ease-in-out duration-300  hover:text-accent"
              />
            </button>
          ) : (
            <button>
              <Eye
                onClick={() => setIsPasswordVisible((prev) => !prev)}
                className="h-5  transition ease-in-out duration-300  hover:text-accent"
              />
            </button>
          )}

          <CopyToClipboard onCopy={() => console.log("copied")} text={secret}>
            <button>
              <Copy className="h-5  transition ease-in-out duration-300  hover:text-accent" />
            </button>
          </CopyToClipboard>

          <Dropdown id={id} />
        </div>
      </div>
    </div>
  );
}

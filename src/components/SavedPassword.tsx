"use client";
import { useState } from "react";
import { Eye, Copy, EyeOff } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Dropdown from "./Dropdown";
import { useToast } from "rc-toastr";
type SavedPasswordProps = {
  title: string;
  password: string;
  id: number;
};

export default function SavedPassword({
  title,
  password,
  id,
}: SavedPasswordProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { toast } = useToast();

  function onCopy() {
    toast.success("copied");
  }

  return (
    <>
      <div className="flex flex-col odd:bg-primary/5 odd:shadow dark:odd:bg-accent/5  rounded-sm gap-2  p-2">
        <p className="font-extralight text-xl capitalize  ">{title}</p>

        <div className="flex justify-between  w-full  ">
          <input
            disabled
            className="bg-transparent flex w-full rounded   focus:outline-none "
            type={isPasswordVisible ? "text" : "password"}
            defaultValue={password}
          />

          <div className="flex  justify-between  items-center  gap-1">
            {isPasswordVisible ? (
              <button>
                <EyeOff
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="h-5  transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent"
                />
              </button>
            ) : (
              <button>
                <Eye
                  onClick={() => setIsPasswordVisible((prev) => !prev)}
                  className="h-5  transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent"
                />
              </button>
            )}

            <CopyToClipboard
              onCopy={() => console.log("copied")}
              text={password}
            >
              <button onClick={onCopy}>
                <Copy className="h-5  transition ease-in-out duration-300 hover:text-primary dark:hover:text-accent" />
              </button>
            </CopyToClipboard>

            <Dropdown password={password} title={title} id={id} />
          </div>
        </div>
      </div>
    </>
  );
}

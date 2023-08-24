"use client";
import { useState } from "react";
import { Eye, Copy, MoreVertical, Edit, Trash2, EyeOff } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Link from "next/link";
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
  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  return (
    <div className="flex flex-col odd:bg-primary/5 odd:shadow dark:odd:bg-accent/5  rounded-sm gap-2  p-2">
      <p className="select-none font-extralight text-xl capitalize  ">
        {title}
      </p>

      <div className="flex justify-between  w-full  ">
        <input
          className="bg-transparent flex w-full rounded   focus:outline-none "
          type={isPasswordVisible ? "text" : "password"}
          defaultValue={secret}
        />

        <div className="flex  items-center  gap-1">
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

          <button
            className=""
            onClick={() => setIsDropDownOpen((prev) => !prev)}
          >
            <MoreVertical className="h-5 transition ease-in-out duration-300  hover:text-accent" />
            <ul
              className={`absolute w-28 ${
                isDropdownOpen ? "opacity-100" : "hidden"
              }  translate-x-6 translate-y-2 transition duration-150 ease-in-out  bg-secondaryDark shadow shadow-accent/70 flex gap-3  flex-col text-slate-200`}
            >
              <Link href={`/edit-password/${id}`}>
                <li className="flex  transition ease-in duration-150 hover:bg-accent/60 p-2 items-center cursor-pointer  justify-between">
                  <Edit className="h-5" />
                  <p>Edit</p>
                </li>
              </Link>
              <Link href={`/delete-password/${id}`}>
                <li className="flex  transition ease-in duration-150 hover:bg-accent/60 p-2 items-center cursor-pointer  justify-between">
                  <Trash2 className="h-5" />
                  <p>Delete</p>
                </li>
              </Link>
            </ul>
          </button>
        </div>
      </div>
    </div>
  );
}

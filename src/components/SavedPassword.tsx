"use client";
import { useState } from "react";
import { Eye, Copy, MoreVertical, Edit, Trash2 } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Modal from "./Modal";
type SavedPasswordProps = {
  title: string;
  secret: string;
  id: number;
};

const dropDownList = [
  { type: "Edit", icon: <Edit className="h-5" /> },
  { type: "Delete", icon: <Trash2 className="h-5" /> },
];

export default function SavedPassword({
  title,
  secret,
  id,
}: SavedPasswordProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  return (
    <div className="flex  items-center justify-between py-3">
      <dialog id="modal" />
      <p className="select-none">{title}</p>
      <div className="flex ">
        <input
          className="bg-transparent focus:outline-none text-right"
          type={isPasswordVisible ? "text" : "password"}
          defaultValue={secret}
        />

        <div className="flex items-center ml-6 gap-1">
          <button>
            <Eye
              onClick={() => setIsPasswordVisible((prev) => !prev)}
              className="h-5  transition ease-in-out duration-300  hover:text-accent"
            />
          </button>
          <CopyToClipboard onCopy={() => console.log("copied")} text={secret}>
            <button>
              <Copy className="h-5  transition ease-in-out duration-300  hover:text-accent" />
            </button>
          </CopyToClipboard>

          <div className="border relative">
            <div className="absolute  translate-x-6 translate-y-3">
              <ul className=" relative transition duration-150 ease-in-out  bg-secondaryDark shadow shadow-accent/70 flex gap-1 w-28 flex-col text-slate-200">
                {dropDownList.map(({ type, icon }, index) => (
                  <li
                    key={index}
                    className={`flex  transition ease-in duration-150 hover:bg-accent/60 p-2 items-center cursor-pointer justify-between bg-secondaryDark`}
                  >
                    {icon}
                    {type === "Edit" ? (
                      <Modal showEdit={false} id={id} />
                    ) : (
                      <Modal showEdit={false} id={id} />
                    )}

                    <p>{type}</p>
                  </li>
                ))}
              </ul>
            </div>
            <button>
              <MoreVertical className="h-5  transition ease-in-out duration-300  hover:text-accent" />
            </button>
          </div>

          {/* <div className="bg-red-500  rounded">
            <ul className=" relative left-9 transition duration-150 ease-in-out  bg-secondaryDark shadow shadow-accent/70 flex gap-1 w-28 flex-col text-slate-200">
              {dropDownList.map(({ type, icon }, index) => (
                <li
                  key={index}
                  className={`flex  relative transition ease-in duration-150 hover:bg-accent/60 p-2 items-center cursor-pointer justify-between bg-secondaryDark`}
                >
                  {icon}
                  {type === "Edit" ? (
                    <Modal showEdit={true} id={id} />
                  ) : (
                    <Modal showEdit={false} id={id} />
                  )}

                  <p>{type}</p>
                </li>
              ))}
            </ul>
            <button>
              <MoreVertical className="h-5  transition ease-in-out duration-300  hover:text-accent" />
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

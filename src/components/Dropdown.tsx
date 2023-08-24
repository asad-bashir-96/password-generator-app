"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Edit, Trash2, MoreVertical } from "react-feather";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <MoreVertical className="h-5 transition ease-in-out duration-300  hover:text-accent" />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="translate-x-16 transition w-28 duration-150 ease-in-out rounded  bg-secondaryDark shadow shadow-accent/70 flex  flex-col text-slate-200">
          <DropdownMenu.Item className="outline-none">
            <li className="flex py-2  transition ease-in px-2 duration-150 hover:bg-accent/60  items-center cursor-pointer  justify-between">
              <Edit className="h-5" />
              <p>Edit</p>
            </li>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="outline-none">
            <li className="flex  py-2  transition ease-in px-2 duration-150 hover:bg-accent/60  items-center cursor-pointer  justify-between">
              <Trash2 className="h-5" />
              <p>Delete</p>
            </li>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

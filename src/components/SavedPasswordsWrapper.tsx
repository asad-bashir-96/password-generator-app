"use client";
import { ReactNode } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type SavedPasswordsWrapperProps = {
  children: ReactNode;
};

export default function SavedPasswordsWrapper({
  children,
}: SavedPasswordsWrapperProps) {
  const [parent] = useAutoAnimate();
  return (
    <div
      ref={parent}
      className="flex flex-col  divide-y divide-gray-200 dark:divide-accent/50"
    >
      {children}
    </div>
  );
}

"use client";
import { useState } from "react";
import { RefreshCw } from "react-feather";
import generator from "generate-password-ts";
import * as Checkbox from "@radix-ui/react-checkbox";

type Settings = {
  length: number;
  numbers: boolean;
  symbols: boolean;
  lowercase: boolean;
  uppercase: boolean;
};

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [setttings, setSettings] = useState<Settings>({
    length: 8,
    numbers: true,
    symbols: true,
    lowercase: true,
    uppercase: true,
  });

  function generatePassword() {
    const password = generator.generate(setttings);
    setPassword(password);
  }
  return (
    <div className="py-2 text-slate-200">
      <div className="container   flex flex-col gap-5 items-center mx-auto">
        <h1 className="text-5xl my-6 font-normal  capitalize">
          never worry about password management ever again
        </h1>
        <div className="w-4/5 max-w-4xl p-4 rounded h-56 bg-white dark:bg-secondary">
          <div className="w-4/5 mx-auto">
            <h2 className="text-center mb-10 text-xl">password settings</h2>
            <div className="border-b items-center justify-between pb-1 flex text-2xl">
              <p>{password}</p>
              <button onClick={generatePassword}>
                <RefreshCw className="h-5 hover:text-accent" />
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={generatePassword}
          className="bg-primary capitalize p-4 rounded text-white"
        >
          copy password
        </button>
      </div>
    </div>
  );
}

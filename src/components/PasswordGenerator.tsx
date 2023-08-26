"use client";
import { useEffect, useState } from "react";
import { RefreshCw, Check } from "react-feather";
import generator from "generate-password-ts";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Slider from "./Slider";

export type Settings = {
  length: number;
  numbers: boolean;
  symbols: boolean;
  lowercase: boolean;
  uppercase: boolean;
  strict: boolean;
};

type PasswordGeneratorProps = {
  initialPassword: string;
  initialSettings: Settings;
};

export default function PasswordGenerator({
  initialPassword,
  initialSettings,
}: PasswordGeneratorProps) {
  const [password, setPassword] = useState(initialPassword);
  const [settings, setSettings] = useState(initialSettings);
  const [isDisabled, setIsDisabled] = useState({
    numbers: false,
    lowerCase: false,
    upperCase: false,
    symbols: false,
  });

  useEffect(() => {
    checkIfDisabled();
    generatePassword();
  }, [settings]);

  function generatePassword() {
    const password = generator.generate(settings);
    setPassword(password);
  }

  function checkIfDisabled() {
    //Numbers
    if (!(settings.lowercase || settings.uppercase || settings.symbols)) {
      setIsDisabled((prev) => {
        return { ...prev, numbers: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, numbers: false };
      });
    }
    //Lowercase
    if (!(settings.numbers || settings.uppercase || settings.symbols)) {
      setIsDisabled((prev) => {
        return { ...prev, lowerCase: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, lowerCase: false };
      });
    }
    //Uppercase
    if (!(settings.numbers || settings.lowercase || settings.symbols)) {
      setIsDisabled((prev) => {
        return { ...prev, upperCase: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, upperCase: false };
      });
    }
    //Symbols
    if (!(settings.numbers || settings.uppercase || settings.lowercase)) {
      setIsDisabled((prev) => {
        return { ...prev, symbols: true };
      });
    } else {
      setIsDisabled((prev) => {
        return { ...prev, symbols: false };
      });
    }
  }

  function handleNumberChange() {
    setSettings((prev) => {
      return { ...prev, numbers: !prev.numbers };
    });
  }

  function handleLowerCaseChange() {
    setSettings((prev) => {
      return { ...prev, lowercase: !prev.lowercase };
    });
  }
  function handleUpperCaseChange() {
    setSettings((prev) => {
      return { ...prev, uppercase: !prev.uppercase };
    });
  }

  function handleSymbloChange() {
    setSettings((prev) => {
      return { ...prev, symbols: !prev.symbols };
    });
  }

  return (
    <>
      <div className="w-4/5 max-w-4xl    py-10 rounded-lg shadow-md  border-gray-200 dark:border-accent/50 dark:shadow-slate-900 border bg-white dark:bg-secondary">
        <div className="w-4/5 mx-auto ">
          <h2 className="text-center font-extralight mb-10 text-2xl">
            generate password
          </h2>
          <div className="  items-center justify-between pb-1 border-b-2  rounded-sm dark:border-accent border-gray-200 shadow p-1  flex text-2xl">
            <p className=" overflow-x-hidden flex-grow">{password}</p>

            <button className=" " onClick={generatePassword}>
              <RefreshCw className="h-5 bg-transparent  transition ease-in-out duration-700 hover:rotate-180  hover:text-accent" />
            </button>
          </div>
          <div className="flex w-full justify-end">
            <CopyToClipboard
              onCopy={() => console.log("copied")}
              text={password}
            >
              <button className="bg-primary   text-white mt-6 relative  hover:bg-primary/80 transition ease-in duration-100 p-2  capitalize sm:py-3 sm:px-2 rounded">
                copy password
              </button>
            </CopyToClipboard>
          </div>
          <div className=" flex flex-col justify-center">
            <p className=" ">{`Length (${settings.length})`}</p>
            <Slider settings={settings} setSettings={setSettings} />

            <ul className="flex flex-wrap gap-6 justify-between">
              <li className="flex gap-2 items-center  ">
                <Checkbox.Root
                  disabled={isDisabled.numbers}
                  checked={settings.numbers}
                  onCheckedChange={handleNumberChange}
                  className=" flex h-5 w-5 bg-primary p-3   items-center justify-center rounded shadow-sm   border-gray-200/70 border  outline-none"
                >
                  <Checkbox.Indicator>
                    <Check
                      className={`transition text-white duration-150 ease-in ${
                        isDisabled.numbers ? "bg-accent " : ""
                      }`}
                    />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p
                  className={`transition duration-150 ease-in ${
                    isDisabled.numbers ? "line-through text-gray-500" : ""
                  }`}
                >
                  Numbers
                </p>
              </li>
              <li className="flex gap-2 items-center  ">
                <Checkbox.Root
                  disabled={isDisabled.lowerCase}
                  checked={settings.lowercase}
                  onCheckedChange={handleLowerCaseChange}
                  className=" flex h-5 w-5 p-3  bg-primary   items-center justify-center rounded shadow-sm  border-gray-200/70 border  outline-none"
                >
                  <Checkbox.Indicator>
                    <Check
                      className={`transition text-white duration-150 ease-in ${
                        isDisabled.lowerCase ? "bg-accent " : ""
                      }`}
                    />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p
                  className={`transition duration-150 ease-in ${
                    isDisabled.lowerCase ? "line-through text-gray-500" : ""
                  }`}
                >
                  Lowercase
                </p>
              </li>
              <li className="flex gap-2 items-center  ">
                <Checkbox.Root
                  disabled={isDisabled.upperCase}
                  checked={settings.uppercase}
                  onCheckedChange={handleUpperCaseChange}
                  className=" flex h-5 w-5 bg-primary p-3    items-center justify-center rounded shadow-sm  border-gray-200/70 border  outline-none"
                >
                  <Checkbox.Indicator>
                    <Check
                      className={`transition text-white duration-150 ease-in ${
                        isDisabled.upperCase ? "bg-accent " : ""
                      }`}
                    />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p
                  className={`transition duration-150 ease-in ${
                    isDisabled.upperCase ? "line-through text-gray-500" : ""
                  }`}
                >
                  Uppercase
                </p>
              </li>
              <li className="flex gap-2 items-center  ">
                <Checkbox.Root
                  disabled={isDisabled.symbols}
                  checked={settings.symbols}
                  onCheckedChange={handleSymbloChange}
                  className=" flex h-5 w-5 p-3  bg-primary   items-center justify-center rounded shadow-sm    border-gray-200/70 border  outline-none"
                >
                  <Checkbox.Indicator>
                    <Check
                      className={`transition text-white duration-150 ease-in ${
                        isDisabled.symbols ? "bg-accent " : ""
                      }`}
                    />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <p
                  className={`transition duration-150 ease-in ${
                    isDisabled.symbols ? "line-through text-gray-500" : ""
                  }`}
                >
                  Symblos
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
type SliderProps = {
  length: number;
  setLength: Dispatch<SetStateAction<number>>;
  generatePassword: () => void;
};

export default function Slider({
  length,
  setLength,
  generatePassword,
}: SliderProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setLength(e.target.valueAsNumber);
    generatePassword();
  }
  return (
    <input
      type="range"
      min={8}
      max={20}
      value={length}
      onChange={handleChange}
      className="range my-4 range-sm range-primary"
    />
  );
}

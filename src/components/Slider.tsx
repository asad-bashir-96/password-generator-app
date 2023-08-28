"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Settings } from "./PasswordGenerator";
type SliderProps = {
  settings: Settings;
  setSettings: Dispatch<SetStateAction<Settings>>;
};

export default function Slider({ settings, setSettings }: SliderProps) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSettings({ ...settings, length: e.target.valueAsNumber });
  }
  return (
    <input
      type="range"
      min={8}
      max={20}
      value={settings.length}
      onChange={handleChange}
      className={
        "range mt-4 mb-10 range-sm dark:range-secondary  range-primary"
      }
    />
  );
}

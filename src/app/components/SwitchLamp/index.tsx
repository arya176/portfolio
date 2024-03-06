"use client";

import Lamp from "../Lamp";
import Switch from "../Switch";

type Props = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

export default function SwitchLamp({ darkMode, toggleDarkMode }: Props) {
  return (
    <>
      <Switch darkMode={darkMode} handleClick={toggleDarkMode} />
      <Lamp darkMode={darkMode} />
    </>
  );
}

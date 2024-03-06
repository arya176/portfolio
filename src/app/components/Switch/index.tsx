"use client";
import switchOn from "/public/images/switch-ON.jpg";
import switchOff from "/public/images/switch-OFF.png";
import Image from "next/image";
import { useState } from "react";
type Props = {
  toggle: boolean;
  handleClick: () => void;
  // darkMode: boolean; // Define the prop types
  // toggleDarkMode: () => void; // Define the prop types
};

export default function Switch(props: Props) {
  return (
    <Image
      className="ml-[94%] mt-3 absolute"
      src={props.toggle ? switchOn : switchOff}
      alt="light image"
      width={50}
      height={50}
      onClick={props.handleClick}
    />
  );
}

// 1. Create Higher Order component SwitchLamp that imports Switch component
// 2. Add SwitchLamp to page.tsx and remove Switch from page.tsx
// 3. Create Lamp component which will render lamp image and will accept 1 prop: toggle
// 4. Add Lamp component to SwitchLamp Component under Switch
// 5. Move the logic for managing toggle state and managing handleClick to SwitchLamp component
// 6. Pass handleClick and toggle as props to Switch component
// REMEMBER to use "use client" directive!

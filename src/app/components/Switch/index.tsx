"use client";

import switchOn from "/public/images/switch-ON.jpg";
import switchOff from "/public/images/switch-OFF.png";
import Image from "next/image";

type Props = {
  darkMode: boolean;
  handleClick: () => void;
};

export default function Switch({ darkMode, handleClick }: Props) {
  return (
    <Image
      className="ml-[94%] mt-3 absolute"
      src={darkMode ? switchOn : switchOff}
      alt="light image"
      width={50}
      height={50}
      onClick={handleClick}
    />
  );
}

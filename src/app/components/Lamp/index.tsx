"use client";

import Image from "next/image";
import lightOn from "/public/images/light-on.png";
import lightOff from "/public/images/light-off.png";

type Props = {
  toggle: boolean;
};
export default function Lamp(props: Props) {
  return (
    <Image
      className="absolute ml-[65%]  "
      src={props.toggle ? lightOff : lightOn}
      alt="My png Logo"
      width={200}
      height={400}
    />
  );
}

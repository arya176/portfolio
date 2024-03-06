"use client";

import Lamp from "../Lamp";
import Switch from "../Switch";
import { useEffect, useState } from "react";

export default function SwitchLamp() {
  const [toggle, toggleSwitch] = useState(false);

  const handleClick = () => {
    toggleSwitch(!toggle);
  };

  return (
    <>
      <Switch toggle={toggle} handleClick={handleClick} />
      <Lamp toggle={toggle} />
    </>
  );
}

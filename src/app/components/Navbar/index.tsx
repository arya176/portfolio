import React from "react";

export default function Navbar() {
  return (
    <div className="flex flex-row flex-wrap m-auto h-[200px] ">
      <div className="p-5 border text-wrap border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#D9EDBF] hover:bg-[#11A068] hover:text-[#FFD966] h-[80px] hover:pt-[160px] hover:h-[200px] duration-300">
        HOME
      </div>
      <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#FFB996] hover:bg-[#11A068] hover:text-[#FFD966] h-[80px] hover:pt-[160px] hover:h-[200px] duration-300">
        MY LOCAL TIME
      </div>

      <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 mr-2 bg-[#FFB996] hover:bg-[#11A068] hover:text-[#FFD966] h-[80px] hover:pt-[160px] hover:h-[200px] duration-300">
        DESIGNS
      </div>
      <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950  mr-2 bg-[#FFB996] hover:bg-[#11A068] hover:text-[#FFD966] h-[80px] hover:pt-[160px] hover:h-[200px] duration-300">
        MY UX/UI
      </div>
      <div className="p-5 border border-t-0 rounded-br-3xl rounded-bl-3xl border-teal-950 bg-[#FFB996] hover:bg-[#11A068] hover:text-[#FFD966] h-[80px] hover:pt-[160px] hover:h-[200px] duration-300">
        ABOUT
      </div>
    </div>
  );
}

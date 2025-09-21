"use client";
import Image from "next/image";
import React from "react";
import dashboardHead from "../../../../public/dashboardHead.png";

const DashboardHead = () => {
  return (
    <div className="relative flex justify-center items-center w-[80vw]">
      {/* Image */}
      <Image
        src={dashboardHead}
        alt="Dashboard Header"
        className="object-contain rounded-lg"
        quality={100} 
        priority
      />

      {/* Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent rounded-b-lg pointer-events-none"></div>
    </div>
  );
};

export default DashboardHead;

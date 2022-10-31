import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div
      className="flex items-center space-x-1 cursor-pointer my-auto overflow-hidden"
    >
      <Image
        src="/plate.jpg"
        alt="test"
        width={40}
        height={40}
        className="object-contain"
      />
      <h1>Food House</h1>
    </div>
  );
};

export default Logo;

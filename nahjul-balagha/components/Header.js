import React from "react";
import Image from "next/image";
function Header() {
  return (
    <div className="bg-dark-violet header">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row">
        <div className="flex flex-col  w-full lg:w-1/2 flex-wrap  items-center lg:items-start text-center lg:text-left px-4 lg:px-0">
          <div className="w-32 h-0.5 bg-white hidden lg:block opacity-40 mt-16"></div>
          <p className="text-5xl lg:text-7xl header-font mt-12">
            Nehjul balagha.
          </p>
          <p className="text-md opacity-80 mt-4">
            Nahjul Balagha (Peak of Eloquence) is a collection of sermons,
            letters, and sayings of Ali ibn Abi Talib, the first Imam. It is
            considered one of the most important works of Islamic literature,
            and has been praised by scholars of all denominations for its
            eloquence, wisdom, and insight.
          </p>
          <button className="border-white border-2 w-32 px-3 py-1 text-md mt-4 mb-28 hover:hover-invert-btn">
            VIEW TOPICS
          </button>
        </div>
        <div className="hidden lg:flex lg:-mb-40 lg:mt-16">
          <Image
            src={"/images/cover.jpg"}
            alt="cover pic"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;

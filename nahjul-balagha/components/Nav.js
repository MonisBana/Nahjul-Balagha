import React from "react";
import Image from "next/image";
import Link from "next/link";

function Nav() {
  return (
    <div className="w-100 h-screen/1 lg:h-20 bg-dark-violet text-white shadow-2xl">
      <div className="container bg-dark-violet mx-auto h-full flex flex-row justify-between ">
        <div className="flex flex-row">
          <div>
            {/* <Image
              src={"/images/cover.jpg"}
              alt="sermons"
              width={75}
              height={75}
            /> */}
          </div>
          <p className="text-5xl text-bold header-font lg:flex lg:items-center ml-4">
            Nahjul Balagha
          </p>
        </div>
        <div className="hidden text-md lg:flex lg:items-center">
          <div className="ml-6 opacity-60 hover:opacity-100 border-b border-transparent  hover:border-white hover:pb-2">
            <Link href="/sermons">SERMONS</Link>
          </div>
          <div className="ml-6 opacity-60 hover:opacity-100 border-b border-transparent  hover:border-white hover:pb-2">
            <Link href="/letters">LETTERS</Link>
          </div>
          <div className="ml-6 opacity-60 border-b border-transparent hover:opacity-100 hover:border-white hover:pb-2">
            <Link href="https://github.com/MonisBana">SAYINGS</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

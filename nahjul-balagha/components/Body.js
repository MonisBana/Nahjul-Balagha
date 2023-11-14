import React from "react";
import Image from "next/image";
function Body() {
  return (
    <div className="flex flex-col mt-48 mx-auto w-1/2">
      <div className="flex flex-row  m-8">
        <div className="px-2">
          <h2 className="m-4 header-font dark-violet text-4xl hover:underline">
            Sermons
          </h2>
          <p className="m-4 text-xl opacity-80">
            Esse minim nostrud velit do laborum ad ex.Velit qui amet labore
            excepteur.Sunt aute do dolore tempor.
          </p>
        </div>
        <Image
          src={"/images/cover.jpg"}
          alt="sermons"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-row m-8">
        <Image
          src={"/images/cover.jpg"}
          alt="letter pic"
          width={300}
          height={300}
        />
        <div className="px-2">
          <h2 className="m-4 header-font dark-violet text-4xl hover:underline">
            Letters
          </h2>
          <p className="m-4 text-xl opacity-80">
            Amet consequat exercitation in reprehenderit eiusmod id commodo
            Lorem anim laborum veniam ea exercitation amet.Velit qui amet labore
            excepteur.
          </p>
        </div>
      </div>
      <div className="flex flex-row m-8">
        <div className="px-2">
          <h2 className="m-4 header-font dark-violet text-4xl hover:underline">
            Sayings
          </h2>
          <p className="m-4 text-xl opacity-80">
            Nisi ad aliqua tempor voluptate elit esse cupidatat ea aliqua
            cupidatat exercitation esse ex fugiat.Velit qui amet labore
            excepteur.
          </p>
        </div>
        <Image
          src={"/images/cover.jpg"}
          alt="letter pic"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default Body;

import React from "react";
import Image from "next/image";
import image1 from "@/public/images/mycareermock.png";
import image2 from "@/public/images/KeKujs3bYVo.png";
import image3 from "@/public/images/h2growmockup.png";
import image4 from "@/public/images/WvuZRFdfd.png";

const FotoScroll = () => {
  return (
    <div className="p-20 mx-0 my-auto">
      <div className="sticky w-full h-[100vh] overflow-hidden top-0 text-center z-10 flex items-center justify-center">
        <h1 className="mt-[60px] md:mt-0 mb-[40px] md:mb-0 drop-shadow text-[28px] md:text-[3.54167vw] md:max-w-[50vw] text-center mx-auto leading-[1.6] w-full leading-2">
          Creativity isn't a fixed endpoint achieved through projects; rather,
          it's an infinite voyage of discovery and refinement.
        </h1>
      </div>
      <div className="w-full mx-auto max-w-[86vw] md:pb-[100vh] overflow-hidden">
        <div className="relative flex flex-col md:flex-row md:flex-wrap -mx-[8.2vw] md:[&>*:nth-child(1)]:mb-[10.5vw] md:[&>*:nth-child(2)]:mb-[10.5vw] md:[&>*:nth-child(even)]:translate-y-[9.5vw] md:pb-[9.5vw] [&>*:nth-child(even)]:ml-auto md:[&>*:nth-child(even)]:ml-0">
          <Image
            className="w-5/6 md:w-1/2 px-[8.2vw] my-[24px] md:my-0 object-cover"
            src={image1}
          />
          <Image
            className="w-5/6 md:w-1/2 px-[8.2vw] my-[24px] md:my-0 object-cover"
            src={image2}
          />
          <Image
            className="w-5/6 md:w-1/2 px-[8.2vw] my-[24px] md:my-0 object-cover"
            src={image3}
          />
          <Image
            className="w-5/6 md:w-1/2 px-[8.2vw] my-[24px] md:my-0 object-cover shadow-md"
            src={image4}
          />
        </div>
      </div>
    </div>
  );
};

export default FotoScroll;

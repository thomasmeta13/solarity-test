import React, { FC } from "react";
import Image from "next/image";
import AframeComp6 from "components/AframeComp6";

export interface HeroProps {
  vrprofile: {
    featured: true,
    imageUrl: "/images/placeholder/post/post_one.png",
    price: 5,
  },
  smallImage: string;
}

const Hero: FC<HeroProps> = ({ vrprofile, smallImage }) => {
  return (
    <div>
    {vrprofile && (
      <div className="relative w-full h-[400px] rounded-2xl -mt-5">

          <AframeComp6 />
            {/* </iframe> */}
            {vrprofile.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vrprofile.price} $VRS
              </button>
            )}
      </div>
    )}
      <div className="flex justify-center ">
        <div className="h-[201px] w-[201px] rounded-full relative -mt-28">
          <Image
            src={smallImage}
            alt={"VR Image"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

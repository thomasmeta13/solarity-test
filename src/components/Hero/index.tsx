import React, { FC } from "react";
import Image from "next/image";
import { VR } from "components/Icons";
import AframeComp1 from "components/AframeComp1";
import AframeComp6 from "components/AframeComp6";

export interface HeroProps {
  vr?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr1?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vrdao?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vrmarket?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  content?: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
}

const Hero: FC<HeroProps> = ({ vr, vr1, vrmarket, vrdao, content }) => {
  return (
    <div>
      {vrmarket && (
      <div className="relative w-full h-[314px] rounded-2xl -mt-5">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp1 />
            {/* </iframe> */}
            {vrmarket.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vrmarket.price} $VRS
              </button>
            )}
            {/*{vr && (
              <button className="absolute gap-3 text-lg font-bold btn rounded-3xl bottom-2 right-2 bg-transparentwhite">
                <VR />
                VR
              </button>
            )}*/}
      </div>
      )}
      {vrdao && (
      <div className="relative w-full h-[400px] rounded-2xl -mt-5">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp6 />
            {/* </iframe> */}
            {vrdao.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vrdao.price} $VRS
              </button>
            )}
            {/*{vr && (
              <button className="absolute gap-3 text-lg font-bold btn rounded-3xl bottom-2 right-2 bg-transparentwhite">
                <VR />
                VR
              </button>
            )}*/}
      </div>
      )}
      {content && (
        <div className="flex justify-between my-6">
          <div className="flex flex-col max-w-4xl ">
            <span className="text-[15px] text-secondary">{content.title}</span>
            <span className="mt-3 text-sm text-gray-950">
              {content.description}
            </span>
          </div>
          <div>
            <button className="btn btn-secondary rounded-3xl">
              {content.buttonText}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

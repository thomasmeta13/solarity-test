import React from "react";
import Image from "next/image";
import classnames from "classnames";
import Tags from "components/Post/Tags";
import { Post } from "modal/post";
import Footer from "components/Post/Footer";
import { VR } from "components/Icons";
import AframeComp from 'components/AframeComp';
import AframeComp1 from 'components/AframeComp1';
import AframeComp2 from 'components/AframeComp2';
import AframeComp3 from "components/AframeComp3";
import AframeComp4 from "components/AframeComp4";
import AframeComp5 from "components/AframeComp5";

const index = ({
  data: { title, subtitle, likes, vr, vr1, vr2, vr3, vr4, vr5, type, tags },
}: {
  data: Post;
}) => {
  return (
    <div>
      <div className="flex flex-col bg-[#1F2125] px-10 py-5 border-l border-darkcharcoal border-r ">
        <div className="flex items-start justify-between">
          <div className="flex flex-col">
            <div className="flex">
              <span
                className={classnames(
                  type === "featured" ? "text-base" : "text-xl",
                  "font-bold"
                )}
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
            {tags && <Tags tags={tags} />}
          </div>

          {type !== "announcement" ? (
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold">{likes}</span>
              {type !== "featured" && (
                <span className="text-xs text-gray-950">9 hours ago</span>
              )}
            </div>
          ) : (
            <button className="rounded-full btn btn-primary">ACTIVE</button>
          )}
        </div>
        {subtitle && (
          <span
            className="mt-2 text-sm leading-5"
            dangerouslySetInnerHTML={{
              __html: subtitle,
            }}
          />
        )}
        {vr && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp />
            {/* </iframe> */}
            {vr.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr.price} $VRS
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
        {vr1 && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
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
            {vr1.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr1.price} $VRS
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
        {vr2 && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp2 />
            {/* </iframe> */}
            {vr2.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr2.price} $VRS
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
        {vr3 && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp3 />
            {/* </iframe> */}
            {vr3.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr3.price} $VRS
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
        {vr4 && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp4 />
            {/* </iframe> */}
            {vr4.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr4.price} $VRS
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
        {vr5 && (
          <div className="relative w-full h-[229px] rounded-2xl mt-4">
            {/* <Image
              src={vr.imageUrl}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            /> */}
            {/* <iframe 
            > */}
            <AframeComp5 />
            {/* </iframe> */}
            {vr5.price && (
              <button className="absolute text-sm font-bold bg-white rounded-full btn top-2 right-2 text-secondary">
                {vr5.price} $VRS
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
      </div>
      <Footer type={type} />
    </div>
  );
};

export default index;

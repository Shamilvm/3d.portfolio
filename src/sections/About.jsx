import React, { useState } from "react";
import Button from "../components/Button";
// import Globe from "react-globe.gl";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("shanushamil086@gmail.com");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid1.png"
              alt=""
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I'm Shamil
              </p>
              <p className="text-[#afb0b6] text-base">
                I'm a passionate software developer based in Dubai, UAE.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid1.png"
              alt=""
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                Tech Stack
              </p>
              <p className="text-[#afb0b6] text-base">
                I specialize in javascript/typescript with a focus on react and
                next.js ecosystems.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-4">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              {/* <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[
                //   {
                //     lat: 40,
                //     lng: -100,
                //     text: "I'm here!",
                //     color: "white",
                //     size: 20,
                //   },
                // ]}
              /> */}
            </div>
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                I work remotely across most timezones.
              </p>
              <p className="text-[#afb0b6] text-base">
                {/* I'm based in Croatia, with remote work available. */}
              </p>
              <Button
                name={"Contact Me"}
                isBeam
                containerClass={"w-full mt-10"}
              />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid3.png"
              alt=""
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="text-xl font-semibold mb-2 text-white">
                My passion for coding
              </p>
              <p className="text-[#afb0b6] text-base">
                Curious to learn more about developing scalable distributed
                systems, loves problem solving. 🖥️ Always curious and ready for
                the next tech challenge 🎯 Let's complete the puzzle together.🧩
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="w-full h-full border border-gray-700 bg-gray-950 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
            <img
              src="/assets/grid4.png"
              alt=""
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="text-[#afb0b6] text-base text-center">Contact Me</p>
              <div
                className="cursor-pointer flex justify-center items-center gap-2"
                onClick={handleCopy}
              >
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-lg md:text-xl font-medium text-white">
                  shamilvilakkumadathil@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

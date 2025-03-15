import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-gray-700 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white flex gap-2">
        <p>|</p>
        <p>privacy policy</p>
      </div>
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img src="/assets/github.svg" alt="" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img src="/assets/twitter.svg" alt="" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img src="/assets/instagram.svg" alt="" className="w-1/2 h-1/2" />
        </div>
      </div>
      <p className="text-white">@2024 shamil. All rights reserved.</p>
    </section>
  );
};

export default Footer;

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-gray-700 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white flex gap-2">
        <p>© 2025 Shamil Vm. All rights reserved. Privacy Policy.</p>
      </div>
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img src="/assets/social/github.svg" alt="" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img src="/assets/social/in.png" alt="" className="w-1/2 h-1/2" />
        </div>
        <div className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800">
          <img
            src="/assets/social/instagram.svg"
            alt=""
            className="w-1/2 h-1/2"
          />
        </div>
      </div>
    </section>
  );
};

export default Footer;

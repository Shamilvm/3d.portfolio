const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-gray-700 flex flex-col sm:flex-row justify-between items-center gap-5">
      <div className="text-white flex gap-2">
        <p>© 2025 Shamil Vm. All rights reserved. Privacy Policy.</p>
      </div>
      <div className="flex gap-3">
        <a
          href="https://github.com/Shamilvm"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img src="/assets/social/github.svg" alt="" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/shamilvm/"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img src="/assets/social/in.png" alt="" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.instagram.com/shamil_vm__/"
          target="_blank"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-gray-950 border border-gray-800"
        >
          <img
            src="/assets/social/instagram.svg"
            alt=""
            className="w-1/2 h-1/2"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;

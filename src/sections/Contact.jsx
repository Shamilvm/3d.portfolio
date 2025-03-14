import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt=""
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-xl relative z-10 sm:px-10 px-5 mt-12">
          <h3 className="sm:text-4xl text-3xl font-semibold">Let's talk</h3>
          <p className="text-lg text-white mt-3">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col pace-y-7"
          >
            <label className="space-y-3">
              <span className="text-lg text-white">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-white text-lg text-white shadow-gray-700 shadow-2xl focus:outline-none"
                placeholder="Your Name"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-white text-lg text-white shadow-gray-700 shadow-2xl focus:outline-none"
                placeholder="example@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="text-lg text-white">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-gray-950 px-5 py-2 min-h-14 rounded-lg placeholder:text-white text-lg text-white shadow-gray-700 shadow-2xl focus:outline-none"
                placeholder="Message here..."
              />
            </label>
            <button
              className="bg-gray-950 px-5 py-2 min-h-12 rounded-lg shadow-gray-700 shadow-2xl flex justify-center items-center text-lg text-white gap-3"
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending" : "Send"}

              <img
                src="/assets/arrow-up.png"
                alt=""
                className="w-2.5 h-2.5 object-contain invert brightness-0"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

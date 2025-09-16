import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";

export default function Landing() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p3kax7t",
        "template_4mql69m",
        form.current,
        "Jp4OppxyaQgClWvtC"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setIsSent(false);
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-[#0e152c] via-[#0d172a] to-[#0a0f1f] text-white overflow-hidden ">
      {/* Header */}
      <header className="w-full flex justify-between items-center px-6  py-4 fixed top-0 left-0 backdrop-blur-md  z-50">
        <img src="/Skytouch-01.png" alt="Logo" className="w-28 md:w-32" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex  px-8 gap-8 text-gray-300 text-sm font-semibold tracking-wide">
          <a href="#about" className="hover:text-sky-400 transition font-extrabold lg:text-2xl md:text-xl" style={{fontFamily: "VELISTA"}}>About</a>
          <a href="#features" className="hover:text-sky-400 transition font-extrabold lg:text-2xl md:text-xl" style={{fontFamily: "VELISTA"}} >Features</a>
          <a href="#contact" className="hover:text-sky-400 transition font-extrabold lg:text-2xl md:text-xl" style={{fontFamily: "VELISTA"}}  >Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-16 right-1 left-1 bg-[#0d172a] shadow-xl rounded-lg p-6 flex flex-col gap-4 md:hidden border border-white/10 min-w-full text-center">
            <a href="#about" className="hover:text-sky-400 transition" onClick={() => setMenuOpen(false)} style={{fontFamily: "VELISTA"}} >About</a>
            <a href="#features" className="hover:text-sky-400 transition" onClick={() => setMenuOpen(false)} style={{fontFamily: "VELISTA"}} >Features</a>
            <a href="#contact" className="hover:text-sky-400 transition" onClick={() => setMenuOpen(false)} style={{fontFamily: "VELISTA"}} >Contact</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <img
          src="https://images.unsplash.com/photo-1581091012184-5c5c86c5f3a0"
          alt="Rocket Launch"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl lg:text-7xl font-extrabold text-white drop-shadow-lg"
            style={{fontFamily: "VELISTA"}}
          >
            Ready for Launch. <br /> Get on the Waitlist
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-lg lg:text-2xl text-gray-300"
            style={{fontFamily: "Agilera"}}
          >
            Join our exclusive list for early access and special perks when we take off.
          </motion.p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1 }}
            className="mt-8 inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition duration-300 tracking-widest"
            style={{fontFamily: "VELISTA"}}
          >
            Join the Waitlist
          </motion.a>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className=" py-14 md:py-20 px-6 bg-[#0f1a30] text-center ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-sky-400"  style={{fontFamily: "VELISTA"}}>
          
          How it Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {[
            { step: "Step 1: Sign Up", desc: "Enter your email to join the exclusive list." },
            { step: "Step 2: Get Ready", desc: "We’ll send you updates and special offers." },
            { step: "Step 3: Take Off", desc: "Be the first to know when we go live." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{item.step}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className=" py-15 md:py-20 px-6 flex flex-col items-center bg-[#0a0f1f]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 w-full max-w-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-sky-400 tracking-wider"  style={{fontFamily: "VELISTA"}}>
            Secure Your Seat
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="text"
              name="user_number"
              placeholder="Phone Number"
              required
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg transition tracking-widest"
               style={{fontFamily: "VELISTA"}}
            >
              Join the Waitlist
            </motion.button>

            {isSent && (
              <p className="text-green-400 text-center mt-3">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className=" py-4 md:py-8 text-center ">
        <hr className="p-4" />
        <div className="flex justify-center gap-6 mb-4">
          
          <a href="#" className="text-gray-400 hover:text-sky-400"><FaTwitter size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-sky-400"><FaFacebookF size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-sky-400"><FaLinkedinIn size={20} /></a>
        </div>
        <p className="text-white text-xl tracking-wide"  style={{fontFamily: "Agilera"}}>
          © 2025 Skytouch. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

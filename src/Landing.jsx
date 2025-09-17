import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import cloudbg from "../public/cloudloader.png";

export default function Landing() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Hide intro after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

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

  // Cloud animation
  const cloudVariants = {
    initial: { y: 200, opacity: 0 },
    animate: { y: -100, opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      {/* Intro Animation */}
      {/* Intro Animation */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center overflow-hidden z-50"
            initial={{ opacity: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Vertical blue gradient that fades upward */}
            {/* Vertical blue gradient that fades upward */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 4.5, ease: "easeInOut" }} // extended fade
              style={{
                background:
                  "linear-gradient(to top, #5ecfffff 100%, transparent 5%)",
              }}
            />

            {/* Full-width cloud rising & fading */}
            <motion.img
              src={cloudbg}
              alt="cloud"
              initial={{ y: 200, opacity: 1 }}
              animate={{ y: -150, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4.5, ease: "easeInOut" }} // sync with bg fade
              className="absolute bottom-0 w-full object-cover"
            />

            {/* Logo/Text in center */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-6xl font-bold text-white drop-shadow-lg relative z-10"
              style={{ fontFamily: "VELISTA" }}
            >
              Skytouch
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Landing Page */}
      {!showIntro && (
        <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">
          {/* Background GIF */}
          <img
            src="/background.gif"
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/40"></div>

          {/* Main Content */}
          <main className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-6">
            {/* Logo */}
            <img
              src="/Skytouch-01.png"
              alt="Logo"
              className="w-32 sm:w-40 md:w-48 mb-6"
            />

            {/* Heading */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold drop-shadow-lg"
              style={{ fontFamily: "VELISTA" }}
            >
              Ready for Launch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-2xl text-gray-200 max-w-xl"
              style={{ fontFamily: "Agilera" }}
            >
              Join our waitlist for early access and special perks.
            </motion.p>

            {/* Email Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-lg"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="flex-1 px-5 sm:px-6 py-3 rounded-full outline-none text-black text-sm sm:text-base"
                style={{
                  border: "1px solid white",
                  background: "white",
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full font-semibold tracking-wider text-sm sm:text-base"
                style={{ fontFamily: "VELISTA" }}
              >
                Join the Waitlist
              </motion.button>
            </form>

            {isSent && (
              <p className="text-cyan-300 mt-3 sm:mt-4 text-sm sm:text-base font-extrabold">
                Thank you! You’ll be notified soon.
              </p>
            )}
          </main>

          {/* Footer */}
          <footer className="relative z-20 w-full py-6 sm:py-8 flex flex-col items-center gap-4 border-t border-white/10 mt-auto">
            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400">
                <FaLinkedinIn size={20} />
              </a>
            </div>
            <p className="text-white text-xs sm:text-sm md:text-base tracking-wide">
              © 2025 Skytouch. All rights reserved.
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

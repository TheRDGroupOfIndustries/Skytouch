import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import cloudbg from "/cloudloader.png";
import useSound from "use-sound";
import bgMusic from "/music/Aakash Gandhi - Heavenly (No Copyright Music).mp3";
import { Volume2, VolumeX } from "lucide-react"; 

export default function Landing() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  //music
    const [play, { stop }] = useSound(bgMusic, { loop: true, volume: 0.8  });
  const [isPlaying, setIsPlaying] = useState(false);
const [autoplayTried, setAutoplayTried] = useState(false);

  // Hide intro after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  // Start music when page loads
 useEffect(() => {
  const tryAutoplay = async () => {
    try {
      await play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Autoplay blocked, waiting for user gesture");
    } finally {
      setAutoplayTried(true);
    }
  };

  tryAutoplay();

  return () => stop();
}, [play, stop]);

const toggleMusic = () => {
  if (isPlaying) {
    stop();
    setIsPlaying(false);
  } else {
    play();
    setIsPlaying(true);
  }
};

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
        {autoplayTried && (
  <button
    onClick={toggleMusic}
    className="fixed bottom-5 right-5 bg-sky-500 text-white px-4 py-2 rounded-full shadow-lg z-50"
  >
    {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
  </button>
)}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50"
            initial={{ opacity: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
               exit={{ opacity: 0 }}
              transition={{ duration: 4.5, ease: "easeInOut" }}
              style={{
                background: "linear-gradient(to top, #5ecfffff 100%, transparent 5%)",
              }}
            />

            {/* Cloud animation */}
            <motion.img
              src={cloudbg}
              alt="cloud"
              initial={{ y: 200, opacity: 1 }}
              animate={{ y: -150, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-0 w-full object-cover"
            />

            {/* Logo */}
            <motion.img
              src="/Skytouch-01.png"
              alt="Skytouch Logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="w-28 sm:w-40 mb-4 z-10"
            />

            {/* Title */}
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="text-4xl sm:text-4xl font-bold text-white drop-shadow-lg z-10 uppercase "
              style={{fontFamily:"Orbitron"}}
            >
              Skytouch
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-lg sm:text-4xl lg:text-7xl text-sky-600 mt-2 z-10 uppercase"
              style={{fontFamily:"Montserrat"}}
            >
              Coming Soon
            </motion.p>
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
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold drop-shadow-lg uppercase"
              style={{fontFamily:"Montserrat"}}
            >
              Ready for Launch
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-3 sm:mt-4 text-base sm:text-lg lg:text-lg text-gray-200 max-w-xl font-monospace"
            >
              Join our waitlist for early access and special perks.
            </motion.p>

            {/* Email Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4 justify-center w-full max-w-lg"
            >
              {/* Full Name */}
              <input
                type="text"
                name="user_name"
                placeholder="Enter your Name"
                required
                className="px-5 sm:px-6 py-3 rounded-xl outline-none text-black text-sm sm:text-base"
                style={{
                  border: "1px solid white",
                  background: "white",
                }}
              />

              {/* Contact Number */}
              <input
                type="text"
                name="user_number"
                placeholder="Enter your Contact Number"
                required
                className="px-5 sm:px-6 py-3 rounded-xl outline-none text-black text-sm sm:text-base"
                style={{
                  border: "1px solid white",
                  background: "white",
                }}
              />

              {/* Email */}
              <input
                type="email"
                name="user_email"
                placeholder="Enter your Email"
                required
                className="px-5 sm:px-6 py-3 rounded-xl outline-none text-black text-sm sm:text-base"
                style={{
                  border: "1px solid white",
                  background: "white",
                }}
              />

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-2xl font-semibold tracking-wider text-sm lg:text-xl sm:text-base"
                style={{fontFamily:"Montserrat"}}
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
            <p className="text-white text-xs sm:text-sm md:text-base tracking-wide uppercase">
              © 2025 Skytouch. All rights reserved.
            </p>
          </footer>
        
        </div>
      )}
    </>
  );
}

'use client';

import { motion } from 'framer-motion';

export default function SwatiguptaAppointment() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/beuaty-8-copyright.jpg")',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-light leading-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Make An <br /> Appointment
        </motion.h2>
        <motion.form
          className="w-full flex flex-col md:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Name"
            className="flex-1 px-6 py-3 bg-transparent border-2 border-white text-white placeholder-white font-semibold text-lg outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-6 py-3 bg-transparent border-2 border-white text-white placeholder-white font-semibold text-lg outline-none"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="flex-1 px-6 py-3 bg-transparent border-2 border-white text-white placeholder-white font-semibold text-lg outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#0099c9] text-white font-bold text-lg uppercase tracking-wide"
          >
            Send Message
          </button>
        </motion.form>
        <motion.div
          className="flex items-center gap-2 mb-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <input type="checkbox" id="privacy" className="accent-[#0099c9] w-5 h-5" />
          <label htmlFor="privacy" className="text-white text-base">
            I have read and agree with the Privacy Policy.
          </label>
        </motion.div>
      </div>
    </section>
  );
}
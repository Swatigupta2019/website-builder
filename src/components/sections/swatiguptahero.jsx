import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SwatiguptaHero() {
  return (
    <section className="relative w-full h-[700px] md:h-[750px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/beuaty-1-copyright.jpg"
        alt="Salon Banner"
        layout="fill"
        objectFit="cover"
        priority
        className="z-0"
      />

      {/* Optional: Overlay tint */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* Overlay Text Content */}
      <motion.div
        className="relative z-10 flex flex-col items-start justify-center h-full text-left px-8 md:px-24 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-black text-[56px] sm:text-[72px] font-light leading-[1.2] tracking-tight mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <span className="sc_item_title_text">Brush touch of</span>
          <span className="block">perfection</span>
        </motion.h1>
        <motion.a
          href="https://hair.nelson.themerex.net/our-services/"
          className="px-7 py-3 bg-[#008AB4] text-white rounded-sm text-sm font-semibold tracking-wide hover:bg-[#00739B] transition mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          View our services
        </motion.a>
      </motion.div>
    </section>
  );
}

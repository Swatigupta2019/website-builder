import { motion } from 'framer-motion';

export default function SwatiguptaAbout() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <motion.h2
          className="text-[48px] sm:text-[54px] font-light leading-tight text-black mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Service beyond <br className="hidden sm:block" /> expectation
        </motion.h2>
        <div className="border-t border-black w-10 mx-auto mb-6"></div>
        <motion.p
          className="text-base sm:text-sm text-gray-600 leading-relaxed"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          Our hair salon is the territory created purely for women who <br className="hidden sm:block" />
          appreciate premium quality, time and flawless look. At our place, <br className="hidden sm:block" />
          you have a chance to have really good time.
        </motion.p>
      </div>
    </section>
  );
}

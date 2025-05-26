'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Helen Blackwood',
    text: "You don't get many offers while looking for a quick styling and cut. Thanks for the wonderful experience at Nelson Salon.",
  },
  {
    name: 'Samantha Edison',
    text: 'I am happy that I have used some of your premium products and feel absolutely great. Your hairdressers are the best. Keep it up.',
  },
  {
    name: 'Emma Graceland',
    text: 'Everything about this place is simply great! I loved the atmosphere and friendly staff. Incredible job, I wish you luck!',
  },
  {
    name: 'Fiona Willson',
    text: 'Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!',
  },
];

export default function SwatiguptaTestimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.h2
          className="text-[36px] font-light text-black mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          What clients say
        </motion.h2>
        <div className="border-t border-black w-10 mx-auto mb-10"></div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                className="p-6 text-center h-full flex flex-col justify-between"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="text-[60px] leading-none text-[#008AB4] mb-6 font-serif">❝</div>
                <p className="text-gray-700 mb-6">{t.text}</p>
                <h4 className="text-sm font-semibold text-[#008AB4] uppercase tracking-wider">{t.name}</h4>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Custom Arrows */}
          <div className="flex justify-center gap-8 mt-8">
            <button
              ref={prevRef}
              className="text-xl text-black hover:text-[#008AB4] transition"
              aria-label="Previous slide"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              className="text-xl text-black hover:text-[#008AB4] transition"
              aria-label="Next slide"
            >
              <FaArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

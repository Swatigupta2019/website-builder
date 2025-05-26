'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import { motion } from 'framer-motion';

const logos = [
  '/images/beuaty-logo-1.png',
  '/images/beuaty-logo-2.png',
  '/images/beuaty-logo-3.png',
  '/images/beuaty-logo-4.png',
  '/images/beuaty-logo-5.png',
];

export default function SwatiguptaLogoSlider() {
  return (
    <section className="py-8" style={{ backgroundColor: '#EAF3F4' }}>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  width={90}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
} 
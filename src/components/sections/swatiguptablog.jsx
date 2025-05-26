'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    title: 'Makeup trends of summer 2021',
    date: 'May 22, 2018',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla…',
    image: '/images/beuaty-13-copyright-404x267.jpg',
    link: '#',
  },
  {
    title: 'How to choose the best manicure',
    date: 'May 22, 2018',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla…',
    image: '/images/beuaty-15-copyright-404x267.jpg',
    link: '#',
  },
  {
    title: 'Healthy anti-age skincare routine',
    date: 'May 22, 2018',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla…',
    image: '/images/beuaty-2-copyright-404x267.jpg',
    link: '#',
  },
  {
    title: 'Home hair dyeing 101: 5 steps',
    date: 'May 22, 2018',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla…',
    image: '/images/beuaty-5-copyright-404x267.jpg',
    link: '#',
  },
];

export default function SwatiguptaBlogSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 bg-[#F9F9F9]">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-light mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          What our clients say
        </motion.h2>
        <div className="border-t border-black w-12 mx-auto mb-10"></div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.a
                href={item.link}
                className="block bg-white rounded-lg shadow hover:shadow-md transition overflow-hidden text-left h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={404}
                  height={267}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-[240px]">
                  <h3 className="text-lg font-semibold leading-snug mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                  <p className="text-sm font-semibold text-[#008AB4]">{item.date}</p>
                </div>
              </motion.a>
            </SwiperSlide>
          ))}

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-8 mt-8">
            <button
              ref={prevRef}
              aria-label="Previous"
              className="text-2xl text-gray-600 hover:text-black transition"
            >
              <FaArrowLeft />
            </button>
            <button
              ref={nextRef}
              aria-label="Next"
              className="text-2xl text-gray-600 hover:text-black transition"
            >
              <FaArrowRight />
            </button>
          </div>
        </Swiper>
      </div>
    </section>
  );
}

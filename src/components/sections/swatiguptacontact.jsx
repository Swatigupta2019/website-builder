'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const instagramImages = [
  {
    src: '/images/image-16-copyright-370x370.jpg',
    likes: 70,
    comments: 18,
  },
  {
    src: '/images/image-35-copyright-370x370.jpg',
    likes: 45,
    comments: 10,
  },
  {
    src: '/images/beuaty-11-copyright-370x370.jpg',
    likes: 90,
    comments: 22,
  },
  {
    src: '/images/beuaty-12-copyright-370x370.jpg',
    likes: 78,
    comments: 15,
  },
  {
    src: '/images/beuaty-17-copyright-370x370.jpg',
    likes: 63,
    comments: 9,
  },
];

export default function SwatiguptaInstagramGallery() {
  return (
    <section className="py-0">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
        {instagramImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative group overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <a href={img.src} target="_blank" rel="noopener noreferrer">
              <Image
                src={img.src}
                alt={`Instagram image ${idx + 1}`}
                width={370}
                height={370}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4 text-white text-sm font-medium">
                <span className="flex items-center gap-1">
                  ❤️ {img.likes}
                </span>
                <span className="flex items-center gap-1">
                  💬 {img.comments}
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

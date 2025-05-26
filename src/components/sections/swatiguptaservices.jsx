import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/beuaty-2-copyright-404x267.jpg', colSpan: 1, rowSpan: 1 },
  { src: '/images/beuaty-3-copyright.jpg', colSpan: 1, rowSpan: 2 },
  { src: '/images/beuaty-4-copyright.jpg', colSpan: 1, rowSpan: 1 },
  { src: '/images/beauty.jpg', colSpan: 1, rowSpan: 2 },
  { src: '/images/beuaty-5-copyright-404x267.jpg', colSpan: 1, rowSpan: 1 },
  { src: '/images/beuaty-6-copyright.jpg', colSpan: 2, rowSpan: 1 },
];

export default function SwatiguptaImageGrid() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <section className="w-full px-0 py-20 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-2 md:gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden group col-span-${img.colSpan} row-span-${img.rowSpan} cursor-pointer`}
            onClick={() => openModal(img.src)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <Image
              src={img.src}
              alt={`Gallery Image ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-2xl bg-white/30 rounded-full p-2">🔍</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Selected"
              width={1200}
              height={800}
              className="w-full h-auto rounded"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

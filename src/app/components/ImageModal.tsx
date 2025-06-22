'use client';

import Modal from 'react-modal';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrls: string[];
  initialSlide: number;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrls, initialSlide }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      className="bg-transparent flex items-center justify-center fixed inset-0 z-50"
      overlayClassName="fixed inset-0 z-40"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        },
        content: {
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }
      }}
      contentLabel="Image Modal"
    >
      <div className="relative w-full h-full max-w-4xl max-h-[70vh] rounded-lg p-10 bg-gray-800">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          initialSlide={initialSlide}
          className="w-full h-full image-carousel"
        >
          {imageUrls.map((url, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-[90%] h-[90%]">
                  <Image
                    src={url}
                    alt={`Vista ampliada ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-gray-400 bg-black bg-opacity-50 rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-all duration-300 z-10"
        >
          X
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal; 
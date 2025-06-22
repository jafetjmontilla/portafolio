'use client';

import Modal from 'react-modal';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onRequestClose, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      className="bg-transparent flex items-center justify-center fixed inset-0 z-50"
      overlayClassName="bg-black bg-opacity-50 fixed inset-0 z-40"
      contentLabel="Image Modal"
    >
      <div className="relative w-full h-full max-w-4xl max-h-[90vh]">
        <Image
          src={imageUrl}
          alt="Vista ampliada"
          fill
          className="object-contain"
        />
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2"
        >
          X
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal; 
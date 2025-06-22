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
        {imageUrl && (
          <div className="w-[90%] h-[90%] m-10 relative">
            <Image
              src={imageUrl}
              alt="Vista ampliada"
              fill
              className="object-contain"
            />
          </div>
        )}
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-all duration-300"
        >
          X
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal; 
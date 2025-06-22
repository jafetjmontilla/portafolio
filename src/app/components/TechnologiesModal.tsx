'use client';

import Modal from 'react-modal';

if (typeof window !== 'undefined') {
  Modal.setAppElement('body');
}

interface TechnologiesModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const technologies = [
  'React', 'TypeScript', 'Remix', 'Next', 'JavaScript Vanilla', 'Tailwind CSS',
  'Node.JS', 'GraphQL', 'Express', 'Redis', 'MongoDB', 'MySQL', 'Git (Version Control)',
  'Socket.IO', 'JWT', 'Firebase', 'Stripe', 'Webhooks'
];

const TechnologiesModal: React.FC<TechnologiesModalProps> = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={300}
      className="bg-gray-800 rounded-lg p-8 max-w-lg w-full mx-auto my-20 relative text-white"
      overlayClassName="fixed inset-0 z-40 flex items-center justify-center"
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
      contentLabel="Technologies Modal"
    >
      <h2 className="text-2xl font-bold mb-4">Tecnologías Utilizadas</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {technologies.map((tech, index) => (
          <li key={index} className="bg-gray-700 rounded-full px-4 py-2 text-center">{tech}</li>
        ))}
      </ul>
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 text-gray-400 bg-black bg-opacity-50 rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-900 transition-all duration-300"
      >
        X
      </button>
    </Modal>
  );
};

export default TechnologiesModal; 
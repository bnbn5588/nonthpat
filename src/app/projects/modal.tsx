import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imgSrc: string | undefined;
}

function ImageModal({ isOpen, onClose, imgSrc }: ImageModalProps) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75" onClick={handleBackgroundClick}>
      <div className="relative">
        <button onClick={onClose} className="absolute right-0 top-0 m-4 text-white">
          <IoIosCloseCircleOutline />
        </button>
        <img src={imgSrc} alt="Expanded" className="max-h-screen max-w-full" />
      </div>
    </div>
  );
}

export default ImageModal;

import { useEffect } from 'react';

const useBodyOverflowHidden = (isModalOpen) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);
};

export default useBodyOverflowHidden;

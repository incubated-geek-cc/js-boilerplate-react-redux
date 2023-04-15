import React, {useEffect, useCallback, useState} from 'react';
import { useSelector } from 'react-redux';
import { isOpen } from '../features/modal/modalSlice';

export const useEscape = () => {
  const isModalOpen = useSelector(isOpen);
  const [isEscapeEvent, setIsEscapeEvent] = useState(false);

  const onEscape = useCallback((event) => {
      const isEscape = event.key === 'Escape'
      if (isEscape && isModalOpen) {
        setIsEscapeEvent(true);
      }
    },
    [isModalOpen, isEscapeEvent, setIsEscapeEvent]
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('keydown', onEscape);
    };
  }, [onEscape]);

  return {
    isEscapeEvent,
    setIsEscapeEvent
  };
};

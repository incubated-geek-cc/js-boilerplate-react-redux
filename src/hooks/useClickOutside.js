import React, {useEffect, useState, useRef} from 'react'
import { isOpen } from '../features/modal/modalSlice'
import { useSelector } from 'react-redux';

export const useIsClickOutside = initialState => {
  const ref = useRef(null);
  const isModalOpen = useSelector(isOpen);
  const [isClickOutside, setisClickOutside] = useState(initialState);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setisClickOutside(true)
    }
  }

  useEffect(() => {
    if (!isModalOpen && isClickOutside) {
      setisClickOutside(false)
    }
  }, [isModalOpen])

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { 
    ref, 
    isClickOutside, 
    setisClickOutside 
  }
}

import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { AddTodo } from '../todos/components/AddTodo';
import { isOpen, toggleModal } from '../modal/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../todos/todosSlice';
import { resetEdit } from '../todos/todosSlice';
import { useIsClickOutside } from '.././../hooks/useClickOutside';

const Modal = () => {
  const dispatch = useDispatch()
  const isModalOpen = useSelector(isOpen)
  const { todos } = useSelector(selectTodos)
  const { ref, isClickOutside, setisClickOutside } = useIsClickOutside(false)

  useEffect(() => {
    const isEditing = todos.find(todo => todo.isEditing === true)
    if (isEditing) {
      dispatch(toggleModal())
      const targetTodo = todos.find(todo => todo.isEditing === true)
      console.log('Edit Target Todo', targetTodo)
    }
  }, [todos])

  useEffect(() => {
    if (isModalOpen && isClickOutside) {
      setisClickOutside(false)
      dispatch(resetEdit())
      dispatch(toggleModal())
    }
  }, [isClickOutside])

  return (
    <React.Fragment>
      {isModalOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div ref={ref}>
              <AddTodo />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Modal

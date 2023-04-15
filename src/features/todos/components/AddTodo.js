import * as React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styles from './AddTodo.module.css'
import { useDispatch } from 'react-redux';
import { addTodo } from '../todosSlice'
import { toggleModal } from '../../modal/modalSlice'

export const AddTodo = () => {
  const todoRef = React.useRef(null)
  const dispatch = useDispatch()

  const generateTodo = () => {
    return {
      id: uuidv4(),
      text: todoRef.current.value,
      isEditing: false,
      createdAt: new Date().toISOString()
    }
  }

  const onSubmit = e => {
    e?.preventDefault()
    const todo = generateTodo()
    dispatch(addTodo(todo))
    dispatch(toggleModal())
  }

  return (
    <div className={styles.container}>
      <form className={styles.formWrap} onSubmit={onSubmit} noValidate>
        <input
          className={styles.input}
          ref={todoRef}
          name='text'
          autoFocus={true}
        />
        <input className={styles.button} type='submit' value='Create Task' />
      </form>
    </div>
  )
}

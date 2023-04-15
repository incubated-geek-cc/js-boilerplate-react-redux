import React, {useEffect} from 'react'
import styles from './Todos.module.css'
import { selectTodos } from './todosSlice'
import { Header } from './components/Header'
import { useEscape } from '../../hooks/useEscape'
import { isOpen, toggleModal } from '../modal/modalSlice'
import { editTodo, deleteTodo } from './todosSlice'
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete } from '@react-icons/all-files/ai/AiOutlineDelete';

const Todos = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(isOpen);
  const { isEscapeEvent, setIsEscapeEvent } = useEscape();
  const { todos } = useSelector(selectTodos);

  const onEditTodo = todo => dispatch(editTodo(todo)); // dispatch action --> change state of reducer
  const onDeleteTodo = todo => dispatch(deleteTodo(todo));

  useEffect(() => {
    if (isModalOpen && isEscapeEvent) {
      dispatch(toggleModal())
      setIsEscapeEvent(false)
    }
  }, [isModalOpen, isEscapeEvent])

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {<Header hasTodos={todos.length > 0} />}
        {todos.map(todo => {
          return (
            <React.Fragment key={todo.id}>
              <li onClick={() => onEditTodo(todo)} className={styles.card}>
                <div
                  className={styles.delete}
                  onClick={() => onDeleteTodo(todo)}
                >
                  <AiOutlineDelete />
                </div>
                {todo.text}
              </li>
            </React.Fragment>
          )
        })}
      </ul>
    </div>
  )
}

export default Todos

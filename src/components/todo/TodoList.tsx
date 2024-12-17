import React from 'react'
import { ITodo } from '../../interfaces/todo.interface'
import TodoItem from './TodoItem'

interface TodoListProps{
    todos:ITodo[] | undefined
}

const TodoList:React.FC<TodoListProps> = ({todos}) => {
  return (
    <div>
        {todos?.map(({completed,id,title}) => (
            <TodoItem completed={completed} id={id} title={title} key={id}/>
        ))}
    </div>
  )
}

export default TodoList
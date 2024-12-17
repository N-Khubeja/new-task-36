import React from 'react'
import { useNavigate } from 'react-router-dom'

interface TodoItemProps{
    id:number
    title:string
    completed:boolean
}

const TodoItem:React.FC<TodoItemProps> = ({completed,id,title}) => {

    const navigate = useNavigate()

  return (
        <div onClick={() => navigate(`/todos/${id}`)} key={id} className='border border-gray-300 cursor-pointer'>
                <h3>{title}</h3>
                <h3 className='text-orange-600'>{completed ? 'done' : 'panding'}</h3>
        </div>
  )
}

export default TodoItem
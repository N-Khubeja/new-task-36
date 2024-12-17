import React from 'react'
import useFetchTodos from '../hooks/query/useFetchTodos'
import TodoList from '../components/todo/TodoList'

const TodosPage:React.FC = () => {
    const {data:todos, error, isLoading} = useFetchTodos()

  if(error) return <h1>{error.message}</h1>
  if(isLoading) return <h1>...LOADING</h1>

  return (<TodoList todos={todos}/>)
}

export default TodosPage
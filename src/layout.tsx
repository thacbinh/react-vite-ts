import { useState } from 'react'
import TodoList from './component/todo.list'

function Layout() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>Hello</div>
      <TodoList />
    </>
  )
}

export default Layout

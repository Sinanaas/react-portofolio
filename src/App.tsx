import { useState } from "react"
import "./style.css"
import NewTodoForm from "./NewTodoForm";

interface TodoItem {
  id: string;
  title: string,
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos(currentTodos => {

      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTOdo(id: string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return [
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTOdo(todo.id)}>
                Delete
              </button>
            </li>
          ]
        })}
      </ul>
    </>
  )
}
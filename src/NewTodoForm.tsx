import { useState } from "react";

interface NewTodoFormProps {
  addTodo: (title: string) =>void
}

export default function NewTodoForm({ addTodo }: NewTodoFormProps) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        addTodo(newItem)
        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}
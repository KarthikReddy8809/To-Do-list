import { SetStateAction, useState } from "react";
import "./index.css";
function App() {
  const [todo,setTodo]=useState([]);
  const [newTodo,setNewTodo]=useState([]);
  const handleChange = (e) => {
    setNewTodo(e.target.value);
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(newTodo.trim()!==" ")
    {
      setTodo([...todo,newTodo]);
      setNewTodo(" ");
    }
  }
console.log(todo);
const handleDelete = (index) => {
  const updatedTodo = todo.filter((_, i) => i !== index);
  setTodo(updatedTodo);
};
  return (
    <div className="container">
    <h2>To-Do App</h2>
    <input  className="input" type="text" placeholder="Add new to-do" name="newTodo" value={newTodo} onChange={handleChange}/>
    <button className="button" onClick={handleSubmit}>+   Add</button>
    {todo
    .filter((item) => item.trim() !== "") // Filter out empty or whitespace-only todos
    .map((item, index) => (
      <div className="arrange" key={index}>
        <br/>
        <li className="list">
          {item}
          <button
            style={{ float: "right", cursor: "pointer" }}
            onClick={() => handleDelete(index)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </div>
    ))}
    </div>

  )
}

export default App

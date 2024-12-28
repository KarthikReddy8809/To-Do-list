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
    <ul>
        {todo.map((item, index) => (
          <div class="arrange">
          <li type="checkbox" key={index} className="list">{item}
          <button  style={{  float:'right' ,cursor:"pointer" }} onClick={() => handleDelete(index)}><i class="fas fa-trash"></i></button>
          </li>
          <br/>
          </div>
        ))}
      </ul>
    </div>

  )
}

export default App

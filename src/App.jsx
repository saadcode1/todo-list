import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './App.css'

function App() {
    let [todo,setTodo]=useState([{
      task:"sample task",
      id:uuidv4(),
      isDone:false
    }])
    let [newTask,setNewTask]=useState("");
   function addTask(event){
    setNewTask(event.target.value);
   }
   
  function addTodo(){
    if(!newTask){
       return alert("Enter Value");
    }
    setTodo((prevData)=>{
      setNewTask("");
      return [...prevData,{task:newTask,id:uuidv4(),isDone:false}]
     })
  }

  function deleteTodo(id){
    setTodo(todo.filter((todos)=>todos.id != id))

  }
  function isDone(id){
    setTodo((prevTodo)=>
      prevTodo.map((todo)=>{
        if(todo.id == id){
          return {...todo,isDone:true}
        }else{
         return todo
        }
      })
    )
}
  return (
    <>
      <h2>TODO LISTS</h2>
      <input placeholder='add task' value={newTask} onChange={addTask}/>
      <button onClick={addTodo} >Add</button>
      <hr/>
      <ol style={{padding:0}}>
       
      {
  todo.length > 0 ? 
  todo.map((todo)=>(
    <li key={todo.id} style={{margin:10,textAlign:'center'}}>
      <span style={todo.isDone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
      &nbsp;&nbsp;
      <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
      <button onClick={()=>isDone(todo.id)}>Done</button>
    </li>
  )) : 
  <h2>No Todos</h2> // render a message if todo array is empty
}
      </ol>
 
    </>
  )
}

export default App

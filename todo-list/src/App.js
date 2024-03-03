import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo"
import React, {useState} from 'react';

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    //Deleting this way in react does not work
    //let index = todos.indexof(todo);
    //todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo", title, desc)
    let sno = todos[todos.length-1].sno+1;

    const myTodo ={
    sno : sno,
    title: title,
    desc: desc,
  }
  console.log(myTodo);
  }

  const [todos, setTodos] = useState([

    {
      sno: 1,
      title: "Go to the TCS",
      desc: "you need to go to the TCS to get this job done"

    },
    {
      sno: 2,
      title: "Go to the Infosys",
      desc: "you need to go to the Infosys to get this job done"

    },
    {
      sno: 3,
      title: "Go to the Wipro",
      desc: "you need to go to the Wipro to get this job done"

    },
  ]);
  return (
   <>
   <Header title="My Todos List" searchBar={false}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;

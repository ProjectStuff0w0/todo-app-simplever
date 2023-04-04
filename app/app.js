'use client';
import { todoList } from "./data";
import ListComponents from "./listComponent";
import AddTask from "./addTaskComponent";
import { useState } from "react";
import styles from './page.module.css'
let idTrack=1;
export default function App() 
{

const [allTasks, setTodoList] = useState( todoList );

  function handleChange(lId,nextCheck)
  {
    setTodoList(allTasks.map( todos => 
      {
        if(todos.id === lId)
        {
          return {...todos, isChecked: nextCheck};
        }
        else
          return todos;
      }
      ));
  }

  function handleDelete(lId)
  {
    const updatedList = allTasks.filter((todos) => todos.id != lId);
    setTodoList(updatedList);
  }

  function handleAdd(taskContent)
  {
    setTodoList(
      [
        ...allTasks,
        {
          id: idTrack++,
          task: taskContent,
          isChecked: false

        }
      ]
      );
   
  }

  return (
  <div className={styles.main}>
  
   <AddTask addnewTask={handleAdd}/>
   <div>
      <ListComponents passTasks={allTasks} handleChanges={handleChange} handleDeletes={handleDelete}/>
   </div> 
  </div>
  );



}
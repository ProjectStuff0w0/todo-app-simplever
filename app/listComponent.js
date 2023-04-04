'use client';
import styles from './page.module.css';
export default function ListComponents({passTasks,handleChanges,handleDeletes})
{
 const todoItems = passTasks.map( todos =>
  <li key={todos.id}>
    <div className={styles.customdescription}>
      {todos.task}
      <input 
      type='checkbox' 
      checked={todos.isChecked} 
      onChange={(e) => {
        handleChanges(todos.id,e.target.checked);
        }}
      />
      <button onClick={()=>handleDeletes(todos.id)}>Delete</button>
    </div>
  </li>
           
  );

 return <ul>{todoItems}</ul>;
}
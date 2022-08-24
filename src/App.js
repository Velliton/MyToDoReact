import React, { useState } from "react";
import Todoitem from "./Components/TodoItem";
import todosData from "./TodosData";




function App() {  
  const todos=todosData;
  
  
 

  
  const todosItem=todos.map(item=><Todoitem key={item.id} item={item} />)
  return(
    <div>
      {todosItem}
    </div>
        )
              }
export default App;

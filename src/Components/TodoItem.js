import React from "react";



function Todoitem(props) {
    const [check,setCheck]=React.useState(props.completed);

    const cls=[]
    if (check) {
        cls.push('completed')
    }

    return(
    <div className="todo-item">
        <input type="checkbox"  checked={check} onChange={()=>setCheck(!check)} ></input>
        <p className={cls}>{props.item.text}</p>
      
    </div>
    )
}

export default Todoitem;


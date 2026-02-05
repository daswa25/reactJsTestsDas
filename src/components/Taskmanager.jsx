import { useState } from "react";
function SimpleList(){
    const [task,setTask]= useState([
        "task1","task2"
    ])
    const[text,setText]=useState("")
    const handleAdd=()=>{
        if(text==="") return document.getElementById('output').innerHTML="<span style='color:red'>its empty</span>";

        setTask([...task,text]);
        setText("");

    };
    return (<div className='container'>
        <input type='text' value={text} onChange={(e)=>setText(e.target.value)}></input>
        <button onClick={handleAdd}>add</button>
        <ul>
            {task.map((t)=>(
                <li>{t}</li>
            ))
            }
        </ul>
    </div>)
}
export default SimpleList
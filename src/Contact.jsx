import { useState } from "react";
function Contact(){
    //Task
    const [task,SetTask]= useState([{}])
    //For Input
    const[text,setText]=useState("");
    //ONCLICK FOR ADD
    const newsUp=()=>{
        if(text==="") return alert("please sign up for the news letter");
        const newText={
            id:Date.now(),
            texting:text
        }
       //NEW +OLD 
        SetTask([...text,newText]);
        setText("");
    }
    //RENDERING TEMPLATE
    return(<div className="container">
        <h1>Please follow us for the news letter </h1>
        <input type="text" value={text} onChange={(e)=> setText(e.target.value)}/>
        <button onClick={newsUp}>add</button>
        {task.map((t)=>(<a key={t.id}>{t.texting    }</a>))}
    </div>
    
);


}
export default Contact;
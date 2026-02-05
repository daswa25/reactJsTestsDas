import { useState } from "react";

function EventPlayGround(){
    const [ishovered,setIsHovered]=useState(false);
    const [isEntered,setEntered]=useState(false);
    const [lastkey,setLastKey]=useState("");
    const keyPressed=(e)=>{
        setLastKey(e.key);
        if (e.key==="Enter"){
            alert("You pressed the enter buttons");
        }else{
            alert("you pressed--"+e.key+" Buttons")
        }
        setLastKey("");
    };
    return(<div onMouseEnter={()=>setIsHovered(true)}  onMouseLeave={()=>setIsHovered(false)}  style={{
        width:"200px",
        height:"100px",
        border:"1px solid black",
        boxShadow:ishovered? '0px 0px 10px 0px lightgreen':'0px 0px 10px 0px gray'

        }}>
         <input id="1" type='text' placeholder="enter any key" onBlur={()=>setEntered(false)} 
         onFocus={()=>setEntered(true)}
         onKeyDown={keyPressed}
         style={{border:isEntered? "2px solid green": "1px solid darkred",padding:"10px"}}/>      
    </div>)

}
export default EventPlayGround;
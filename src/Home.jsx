import { Link } from "react-router-dom";
import EventPlayGround from  './components/EventPlayGround'

function Home(){
    return(<div style={{padding: "10px",color:"red"}}>
        <EventPlayGround></EventPlayGround>
                <ul>
                    <li>home</li>
                   <Link to="/About">Please visit about us page</Link><br></br>
                   <Link to="/Contact">Contact</Link>
                </ul>
                
    </div>);

}
export default Home
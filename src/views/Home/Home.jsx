import {useSearchParams} from "react-router-dom";
import "./Home.css";
import Diwalilamp from "./diwali-lamp.png";
import Lamp from "./lamp.png";
import { useState } from "react";

// import dotenv from "dotenv";
// dotenv.config();
// import Process from 'process';


const GREETINGS = [
    
   " दिवाळीचा पहिला दिवा लागता दारी सुखाचे,किरण येती घरी पुर्ण होवोत तुमच्या सर्व ईच्छा, आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा.",

   "सर्वत्र प्रेमाचा सुगंध पसरला, आनंदाचा दिवस आला , एकच देवाकडे प्रार्थना करतो,सुख-समृद्धी लाभू हे तुम्हाला ,तुम्हाला दिवाळीच्या मनःपूर्वक शुभेच्छा.",

   "पहिला दिवा आज लागे दारी, सुखाचा किरण येवो तुमच्या घरी, पुर्ण होवोत तुमच्या सर्व इच्छा, दिपावलीच्या हार्दिक शुभेच्छा.",

   "दिन दिन दिवाळी, गाई म्हशी ओवाळी,इडा – पिडा जाऊ दे, बळीचं राज येऊ दे! दिवाळीच्या हार्दिक शुभेच्छा!"
]

function Home() {
     const [searchParams] = useSearchParams();

     const [to, setTo] = useState(searchParams.get("to"));
     const [from, setFrom] = useState(searchParams.get("from"));
     const [greetingNumber, setGreetingNumber] = useState( searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0 );
     const [themNumber, setThemNumber] = useState(searchParams.get("t"));

    return (

        <div>

        <div className={`greeting-container ${`them-${themNumber}`}`}>

            <img src={Diwalilamp} className="diwali-lamp left-lamp"/>


            <img src={Diwalilamp} className="diwali-lamp right-lamp"/>
           
            <br/><br/><br/>
                
           <h2>Dear {to}💐</h2>
           <p>
             {GREETINGS[greetingNumber]}
           </p>

           <h3 className="from-text">
            🙏From {from}
            </h3>
            <br/><br/><br/>

            <img src={Lamp} className="lamp"/>
        </div>
       <br/><br/>

       <p className="create-your-own">
        Do you want to create your own Greetings? customize it here 👇
        </p> 
       
       <p className="url">{import.meta.env.VITE_BASE_URL}?to={to}&from={from}&g={greetingNumber}&t={themNumber}</p>

     <div className="input-container">
        <input type="text" placeholder="To" 
          className="input"
          value={to}
           onChange={(e) => { 
            setTo(e.target.value)
          }
        } />

        <input type="text" placeholder="From" 
          className="input"
          value={from}
           onChange={(e) => { 
            setFrom(e.target.value)
          }
        } />

        <select value={greetingNumber} 
            className="input"
            onChange={(e) => {
            setGreetingNumber(e.target.value)
        }}>
            <option value="0">Greeting 1</option>
            <option value="1">Greeting 2</option>
            <option value="2">Greeting 3</option>
            <option value="3">Greeting 4</option>
         </select>

         <select value={themNumber} 
              className="input"
            onChange={(e) => {
            setThemNumber(e.target.value)
        }}>
            <option value="0">None</option>
            <option value="1">Theam 1</option>
            <option value="2">Theam 2</option>
            <option value="3">Theam 3</option>
            <option value="4">Theam 4</option>
            <option value="5">Theam 5</option>


            
         </select>
     </div>

       
        
        </div>
    )
}

export default Home
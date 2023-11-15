import {useSearchParams} from "react-router-dom";
import "./Home.css";
import Diwalilamp from "./diwali-lamp.png";
import Lamp from "./lamp.png";
import { useState } from "react";

// import dotenv from "dotenv";
// dotenv.config();
// import Process from 'process';


const GREETINGS = [
    
   " चंदन का टीका नारियल का उपहार, भाई की उम्मीद सिर्फ बहना का प्यार,खुशी से मनाएं आप भाई दूज का त्योहार। भाई दूज की शुभकामनाएं !",

   "भाई दूज का है आया शुभ त्योहार,बहनों की दुआएं भाइयों के लिए हज़ार,भाई बहन का यह अनमोल रिश्ता है बहुत अटूट,बना रहे ये बंधन हमेशा खूब। भाई दूज की शुभकामनाएं !",

   "भाईदूज का त्यौहार,यकीनन है खास, यूं ही बनी रहे हमेशा, हमारे इस रिश्ते की मिठास,भाईदूज की शुभकामनाएं!",

   "सूरज की किरणें, खुशियों की बहार, चांद की चांदनी, अपनों का प्यार , बधाई हो आपको,भैया दूज का त्यौहार।"
]

function Home() {
     const [searchParams] = useSearchParams();

     const [to, setTo] = useState(searchParams.get("to"));
     const [from, setFrom] = useState(searchParams.get("from"));
     const [greetingNumber, setGreetingNumber] = useState( searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0 );
     const [themNumber, setThemNumber] = useState(searchParams.get("t"));

    return (

        <div className={` main-cintainer ${`them-${themNumber}`}`}>

        <div className={`greeting-container `}>

            <img src={Diwalilamp} className="diwali-lamp left-lamp"/>
             
             <h1 className="text-center">✨ Happy Bhai Dooj ✨</h1>

            <img src={Diwalilamp} className="diwali-lamp right-lamp"/>
           
            <br/><br/><br/>
                
           <h1>Dear {to}💐</h1>
           <p className="greet">
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
            <option value="6">Theam 6</option>
            
         </select>
     </div>

       <br /><br /><br/>
        
        </div>
    )
}

export default Home
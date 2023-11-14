import {useSearchParams} from "react-router-dom";
import "./Home.css";
import Diwalilamp from "./diwali-lamp.png";
import Lamp from "./lamp.png";


const GREETINGS = [
    
   " दिवाळीचा पहिला दिवा लागता दारी सुखाचे,किरण येती घरी पुर्ण होवोत तुमच्या सर्व ईच्छा, आमच्याकडुन दिवाळीच्या हार्दिक शुभेच्छा.",

   "सर्वत्र प्रेमाचा सुगंध पसरला, आनंदाचा दिवस आला , एकच देवाकडे प्रार्थना करतो,सुख-समृद्धी लाभू हे तुम्हाला ,तुम्हाला दिवाळीच्या मनःपूर्वक शुभेच्छा.",

   "पहिला दिवा आज लागे दारी, सुखाचा किरण येवो तुमच्या घरी, पुर्ण होवोत तुमच्या सर्व इच्छा, दिपावलीच्या हार्दिक शुभेच्छा.",

   "दिन दिन दिवाळी, गाई म्हशी ओवाळी,इडा – पिडा जाऊ दे, बळीचं राज येऊ दे! दिवाळीच्या हार्दिक शुभेच्छा!"
]

function Home() {
     const [searchParams] = useSearchParams();

     const to = searchParams.get("to");
     const from = searchParams.get("from");
     const greetingNumber = searchParams.get("g") >= GREETINGS.length ? 0 : searchParams.get("g") || 0;
     const themNumber = searchParams.get("t") ;

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

        </div>
    )
}

export default Home
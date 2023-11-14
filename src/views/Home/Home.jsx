import {useSearchParams} from "react-router-dom";
import "./Home.css";


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
     const greetingNumber = searchParams.get("g")>=      GREETINGS.length ? 0 : searchParams.get("g") || 0;

    return (
        <div className="greeting-container">
           <span>Dear {to}💐</span>
           <p>
             {GREETINGS[greetingNumber]}
           </p>

           <span className="from-text">
            🙏From {from}
            </span>
           
        </div>
    )
}

export default Home
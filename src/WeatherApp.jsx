// import { useState } from "react"
// import SearchBox from "./SearchBox"
// import InfoBox from "./InfoBox"
// import "./WeatherApp.css"
// export default function WeatherApp()    
// {
//     let[Weatherinfo,setWeatherinfo]=useState({})
//     let [loading, setLoading] = useState(true);

//     let updateinfo=(newresult)=>{
//         setWeatherinfo(newresult)
//         setLoading(false)
//     }

//     let defaultinfo=(defaultresult)=>{
//         setWeatherinfo(defaultresult)
//         setLoading(false)
//     }

//     return(
//         <div className="WeatherApp">
//         <h1>Real-Time Weather</h1>
//          <SearchBox  updateinfo={updateinfo} defaultinfo={defaultinfo}/>
//          {loading ? <p>Loading...</p> : <InfoBox info={Weatherinfo} />}

//         </div>
//     )
// } 
import { useState, useRef } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
    let [Weatherinfo, setWeatherinfo] = useState({});
    let [loading, setLoading] = useState(true);
    const infoBoxRef = useRef(null); 

    let updateinfo = (newresult) => {
        setWeatherinfo(newresult);
        setLoading(false);
    };

    let defaultinfo = (defaultresult) => {
        setWeatherinfo(defaultresult);
        setLoading(false);
    };

    return (
        <div className="WeatherApp">
            <h1>Real-Time Weather</h1>
            <SearchBox updateinfo={updateinfo} defaultinfo={defaultinfo} infoBoxRef={infoBoxRef} />
            {loading ? <p>Loading...</p> : <InfoBox info={Weatherinfo} ref={infoBoxRef} />}
        </div>
    );
}

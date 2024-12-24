// import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
// import "./InfoBox.css"

// export default function InfoBox({info})
// {
//     let Cold_URL="https://images.unsplash.com/photo-1575060694482-6a6a49458d38?q=80&w=2070auto=format&=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//      let Hot_URL="https://images.unsplash.com/photo-1548854041-924a426d6343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxzdW4lMjByaXNlfGVufDB8fDB8fHww"
//      let Rain_URL="https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc="

//     return(
//      <div className='InfoBox'>
//        <img src={info.Humidity>80 ? Rain_URL :info.Temp>15?Hot_URL:Cold_URL} alt="weatherimages" />
//        <h4>{info.Name} <span>{info.Humidity>80 ? <ThunderstormIcon /> :info.Temp > 15? <WbSunnyIcon/>: <AcUnitIcon/>}</span></h4>
//           <p>Temp:{info.Temp}&deg;c</p>
//           <p>MinTemp:{info.Min_temp}&deg;c</p>
//           <p>MaxTemp:{info.Max_temp}&deg;c</p>
//           <p>Humidity:{info.Humidity}</p>
//           <p>The weather can be described as <b style={{textDecoration:"underline"}}>{info.Weather}</b>  and feels like {info.Feels_like}&deg;c</p>
//     </div>
//     )
// }

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
import { forwardRef } from 'react';

const InfoBox = forwardRef(({ info }, ref) => {
    let Cold_URL = "https://images.unsplash.com/photo-1575060694482-6a6a49458d38?q=80&w=2070auto=format&=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let Hot_URL = "https://images.unsplash.com/photo-1548854041-924a426d6343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxzdW4lMjByaXNlfGVufDB8fDB8fHww";
    let Rain_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=612x612&w=0&k=20&c=2KhHJguvlQvd83c-CJeOiuEKI323gbtSIf1n2sNdXJc=";

    return (
        <div className='InfoBox' ref={ref}>
            <img src={info.Humidity > 80 ? Rain_URL : info.Temp > 15 ? Hot_URL : Cold_URL} alt="weatherimages" />
            <h4>{info.Name} <span>{info.Humidity > 80 ? <ThunderstormIcon /> : info.Temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon />}</span></h4>
            <p>Temp: {info.Temp}&deg;c</p>
            <p>MinTemp: {info.Min_temp}&deg;c</p>
            <p>MaxTemp: {info.Max_temp}&deg;c</p>
            <p>Humidity: {info.Humidity}</p>
            <p>The weather can be described as <b style={{ textDecoration: "underline" }}>{info.Weather}</b> and feels like {info.Feels_like}&deg;c</p>
        </div>
    );
});

export default InfoBox;

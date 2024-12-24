// 

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useEffect, useState } from 'react';

export default function SearchBox({ defaultinfo, updateinfo, infoBoxRef }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "7ec1e21c44ffa63e2ec1ba735d35b2a3";

    useEffect(() => {
        async function defaultweather() {
            try {
                let response = await fetch(`${API_URL}?q=kadi&appid=${API_KEY}&units=metric`);
                let jsonresponse = await response.json();
                let result = {
                    Name: jsonresponse.name,
                    Temp: jsonresponse.main.temp,
                    Min_temp: jsonresponse.main.temp_min,
                    Max_temp: jsonresponse.main.temp_max,
                    Humidity: jsonresponse.main.humidity,
                    Feels_like: jsonresponse.main.feels_like,
                    Weather: jsonresponse.weather[0].main
                };
                if (infoBoxRef.current) {
                    infoBoxRef.current.scrollIntoView({ behavior: "smooth" });
                }
                defaultinfo(result);
            } catch (error) {
                throw error;
            }
        }
        defaultweather();
    }, []);

    let getweatherinfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonresponse = await response.json();
            let result = {
                Name: jsonresponse.name,
                Temp: jsonresponse.main.temp,
                Min_temp: jsonresponse.main.temp_min,
                Max_temp: jsonresponse.main.temp_max,
                Humidity: jsonresponse.main.humidity,
                Feels_like: jsonresponse.main.feels_like,
                Weather: jsonresponse.weather[0].main
            };
            return result;
        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        if (city === "") {
            alert("Please Enter Valid Input");
        } else {
            try {
                event.preventDefault();
                let data = await getweatherinfo();
                updateinfo(data);
                setCity("");
                if (infoBoxRef.current) {
                    infoBoxRef.current.scrollIntoView({ behavior: "smooth" });
                }
            } catch {
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                }, 2000);
                setCity("");
            }
        }
    };

    return (
        <div className="searchbox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="CityName" variant="outlined" value={city} onChange={handleChange} />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                <br /><br />
            </form>
            {err && <h2 style={{ color: "red" }}>No Such Place Exist!</h2>}
        </div>
    );
}

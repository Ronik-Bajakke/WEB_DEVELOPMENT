import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import {useState} from "react";

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="e703db8bef4b54f4024e5420c3139eec";

    let getWeatherInfo=async()=>{
        try{
             let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        let result={
            city: jsonResponse.name,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike:jsonResponse.main.feels_Like,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
       
    }

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }
    let handleSubmit= async (evt)=>{
        evt.preventDefault();
        try{
        console.log(city);
        let newInfo=await getWeatherInfo();
        if(newInfo){
            updateInfo(newInfo);
            setError(false);
        }
        else{
            setError(true);
        }
         setCity(""); 
    }
        catch(err){
            setError(true);
        }
 
    };

    return (
        <div className="SearchBox">
            <h3 >Weather App By NASA</h3>
        <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        <br></br><br></br>
        <Button variant="outlined" type="submit">Search</Button>
        {error&&<p style={{color:"red"}}>No such place exists</p>}
        </form> 
        </div>
    )

}
import {useState, useEffect} from 'react'






export default function Inputs()  {
    const [values, setValues] = useState({city:"", state:""})
    const [weather, setWeather] = useState({})

   
    
        


    const handleChange = event => {
        const {name, value } = event.target;
           setValues({
               ...values,
               [name]: value
           })
      }

    function apiCall() {
      const YOUR_ACCESS_KEY = "YOUR_API_KEY"
      fetch(`http://api.weatherstack.com/current?access_key=${YOUR_ACCESS_KEY}&query=${values.city},${values.state}`)
      .then(res => res.json()).then(data => {
           setWeather(data.current)
      })
    }

    document.onkeydown = function (e) {
        e = e || window.event;
        switch (e.which || e.keyCode) {
              case 13 :
                  apiCall()
                  break;
        }
      }
 

    return (
    <div>    
        <div classname="city">
            <input name="city" type="text" value={values.city} onChange={handleChange} placeholder="city"/>
        </div>
        <div classname="state">
            <input name="state" type="text" value={values.state} onChange={handleChange} placeholder="state"/>
        </div>
        <button onClick={apiCall}>search</button>
        




        <section id="section">
           <div id="weathercontainer">
               <label>Temperature</label>
               <h1 id="weather">{weather.temperature}<supp>c</supp></h1>
           </div>
           <div id="weathercontainer">
               <label>Feels Like</label>
               <h1 id="weather">{weather.feelslike}<supp>c</supp></h1>
           </div>
           <div id="weathercontainer">
               <label>Humdity</label>
               <h1 id="weather">{weather.humidity}<supp>%</supp></h1>
           </div>
           <div id="weathercontainer">
               <label>Precip</label>
               <h1 id="weather">{weather.precip}<supp>%</supp></h1>
           </div>
           <div id="weathercontainer">
               <label>Wind</label>
               <h1 id="weather">{weather.wind_speed}<supp></supp> {weather.wind_dir}</h1>
           </div>
           <div id="weathercontainer">
               <label>visibility</label>
               <h1 id="weather">{weather.visibility}<supp>ft</supp></h1>
           </div>
        </section>
        <article>
            <p>{weather.observation_time}</p>
            <p>{weather.weather_descriptions}</p>
        </article>
    </div>
    )
}

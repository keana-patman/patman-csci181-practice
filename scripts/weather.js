//-------------variables----------------
let isLoading = false;
let errorMessage = "";
let weatherData = null;

let outputElement = document.querySelector("#weather-output");

//-------------functions----------------
function renderWeather(){
    //TODO
    if(isLoading){
        outputElement.innerHTML = `<p style="color:#88A1C2;">Loading...</p>`;
    }
    if(errorMessage){
        outputElement.style.color = "#C42A27";
        outputElement.innerHTML = "Error: " + errorMessage;
    }
    if(weatherData){
        const temp = weatherData.properties.periods[0].temperature;
        const forecast = weatherData.properties.periods[0].shortForecast;
        
        outputElement.innerHTML = `<p style="color:#A0885B; font-size: 72px; line-height: 0.25;">${temp}` + "&deg;" + "<br>";
        outputElement.innerHTML += `<p style="color:#47668F; font-weight: large;">${forecast}`;
    }
    else{
        outputElement.innerHTML = `<p style="color:#88A1C2;">Weather Data Not Available.</p>`;
    }
    
}

async function getWeatherData(){
    isLoading = true;
    errorMessage = "";
    renderWeather();

    try{
        const response = await fetch("https://api.weather.gov/gridpoints/MSO/105,131/forecast");

        if(!response.ok){
            throw new Error(`HTTP Error: ${response.status}`);
        }

        weatherData = await response.json();
        console.log("Success:", weatherData);

    }
    catch(error){
        errorMessage = error.message;
        console.error("Error:", errorMessage);
    }
    finally{
        isLoading = false;
        renderWeather();
    }    
}
//--------others-------------

getWeatherData();
//windchill calculation
/// Windchill Calculation without API

//  weather data
const weatherData = {
    main: {
        temp: 25 // Temperature in Celsius
    },
    weather: [
        { description: "Partly cloudy" }
    ],
    wind: {
        speed: 5 // Wind speed in m/s
    }
};

// Function to populate the UI with weather data
function Populate(data) {
    document.querySelector(".temperature").textContent = `Temperature: ${data.main.temp}°C`;
    document.querySelector(".condition").textContent = `Condition: ${data.weather[0].description}`;
    document.querySelector(".windspeed").textContent = `Wind: ${data.wind.speed} km/h`;
    document.querySelector(".windchill").textContent = `Wind Chill: ${data.wind.speed} °C`;
}

// Call Populate with data
Populate(weatherData);


// function Populate(data){
//     document.querySelector(".temperature").textContent=`temperature: ${data.main.temp}\u00B0c`
//     document.querySelector(".condition").textContent=`condition: ${data.weather[0].description}`
//     document.querySelector(".windspeed").textContent=`wind speed: ${data.wind.speed}`
// }

function calculateWindChill(data) {
    const windspeed = parseFloat(data.wind.speed)
    const temperature = parseFloat(data.main.temp)
    console.log(temperature)

    if (windspeed > 4.8 || temperature <= 10) {
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed, 0.16) + 0.3965 * temperature * Math.pow(windspeed, 0.16)
        document.querySelector(".windchill").textContent = `windchill: ${windChill.toFixed(2)}`
    }

    else {
        console.log("N/A")
    }
}

//last modified date
const option2 = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

const work = document.querySelector(".lastmodified")
const modified = new Date(document.lastModified)
const showmodified = modified.getDate()
document.querySelector(".lastmodified").innerHTML = `Last Modified:` + `${modified.toLocaleDateString("en-US", option2)}`;


const footerspan = document.querySelector(" footer p span").textContent = `${modified.getFullYear()}`

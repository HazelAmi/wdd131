//windchill calculation
const apiURL= "https://api.openweathermap.org/data/2.5/weather?lat=5.5593&lon=0.1974&appid=b2f21d334d4a4feb8a2dffa3560b3b92&units=metric"


//function to call api
async function callApi(){
    const apicall = new Request(apiURL)
    const response = await fetch(apicall)
    const data = await response.json()
    Populate(data)
    calculateWindChill(data)
    console.log(data)
}

callApi()

//create a list to add the elements to it
const ul = document.createElement("ul")
const list = document.createElement("li")

function Populate(data){
    document.querySelector(".temperature").textContent=`temperature: ${data.main.temp}\u00B0c`
    document.querySelector(".condition").textContent=`condition: ${data.weather[0].description}`
    document.querySelector(".windspeed").textContent=`wind speed: ${data.wind.speed}`
}

function calculateWindChill(data){
    const windspeed = parseFloat(data.wind.speed)
    const temperature = parseFloat(data.main.temp)
    console.log(temperature)

    if(windspeed >4.8 || temperature<=10){
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windspeed,0.16) + 0.3965 * temperature * Math.pow(windspeed,0.16)
        document.querySelector(".windchill").textContent=`windchill: ${windChill.toFixed(2)}`
    }

    else{
        console.log("N/A")
    }
}

//last modified date
const option2 = {
    day: "numeric",
    month : "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
}

const work = document.querySelector(".lastmodified")
const modified = new Date(document.lastModified)
const showmodified = modified.getDate()
document.querySelector(".lastmodified").innerHTML = `Last Modified:`+`${modified.toLocaleDateString("en-US", option2)}`;


const footerspan = document.querySelector(" footer p span").textContent = `${modified.getFullYear()}`

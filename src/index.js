'use strict'

const app = document.getElementById('app')
app.style.textAlign = 'center'
app.style.color = '#333'
app.style.backgroundColor = '#f4f4f4'
app.style.padding = '20px'
app.style.borderRadius = '5px'
app.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'
app.style.width = '300px'
app.style.margin = '0 auto'
app.style.border = '1px solid #ddd'
app.style.borderTop = '5px solid #007bff'
app.style.transition = 'all 0.3s'

async function fetchWeatherData(city) {
  // const apiKey = ''
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  // const response = await fetch(url)
  // return response.json()
  return {
    name: 'London',
    main: {
      temp: 20,
    },
    weather: [
      {
        description: 'Cloudy',
      },
    ],
  }
}

function renderWeatherData(data) {
  const weatherData = document.createElement('div')
  weatherData.innerHTML = `
    <h1>${data.name}</h1>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `
  app.appendChild(weatherData)
}

async function handleSubmit(event) {
  event.preventDefault()
  const city = event.target.elements.city.value
  const data = await fetchWeatherData(city)
  renderWeatherData(data)
}

const form = document.createElement('form')
form.addEventListener('submit', handleSubmit)
form.innerHTML = `
  <input type="text" name="city" placeholder="Enter city">
  <button>Get weather</button>
`

app.appendChild(form)

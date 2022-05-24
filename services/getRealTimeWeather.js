export function getRealTimeWeather({ lat, lon }) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'dffd4a7622msh976d34b6c29f648p113c87jsn5fce08fb3853'
    }
  }

  return fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

export function getRealTimeWeather(params) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': 'dffd4a7622msh976d34b6c29f648p113c87jsn5fce08fb3853'
    }
  }

  let url = ''
  if (typeof params === 'string') {
    url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${params}`
  } else if (typeof params === 'object') {
    if (params.hasOwnProperty('lat') && params.hasOwnProperty('lon')) {
      const { lat, lon } = params
      url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lon}`
    }
  }
  return fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))
}

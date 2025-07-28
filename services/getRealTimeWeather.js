export function getRealTimeWeather(params) {

  const rapidApiKey = process.env.NEXT_PRIVATE_RAPIDAPI_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      'X-RapidAPI-Key': rapidApiKey
    }
  }

  let url = ''
  if (typeof params === 'string') {
    url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${params}&days=5&alerts=yes`
  } else if (typeof params === 'object') {
    if (params.hasOwnProperty('lat') && params.hasOwnProperty('lon')) {
      const { lat, lon } = params
      url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${lat},${lon}&days=5&alerts=yes`
    }
  }
  return fetch(url, options)
    .then((response) => {
      return response.json()
    })
    .catch((err) => console.error(err))
}

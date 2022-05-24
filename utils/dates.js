export function getCurrentDate() {
  const daysWeek = [
    'Sunday',
    'Monday',
    'Thursday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  const namesMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const date = new Date()
  //   console.log(date)
  //   const formatDate =
  // date.getDay() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
  const formatDate = `${daysWeek[date.getDay()]} ${date.getDate()}, ${
    namesMonths[date.getMonth() ]
  }`
  return formatDate
}

export function savedata(item) {
    let d = new Date()
  let newItem = {
    id: Date.now() + item,
    item,
    date:d
  }

  let items = getData()

  items = [...items, newItem]

  localStorage.setItem('searches', JSON.stringify(items))
}

export function getData() {
  return JSON.parse(localStorage.getItem('searches')) || []
}

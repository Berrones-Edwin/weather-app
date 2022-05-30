export function savedata(item, name) {
  let d = new Date()
  let newItem = {
    id: Date.now() + item,
    item,
    date: d
  }

  let items = getData(name)

  items = [...items, newItem]

  localStorage.setItem(name, JSON.stringify(items))
}

export function getData(name) {
  return JSON.parse(localStorage.getItem(name)) || []
}

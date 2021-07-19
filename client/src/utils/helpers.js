function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function formatDate(date) {
  let formattedDate = new Date(date)
  formattedDate = formattedDate.getDate() +
    "/" + (formattedDate.getMonth() + 1) +
    "/" + formattedDate.getFullYear() +
    " " + formattedDate.getHours() +
    ":" + formattedDate.getMinutes() +
    ":" + formattedDate.getSeconds()
  return formattedDate
}

export function formatDevice({ UID, vendor, status }) {
  return {
    id: generateUID(),
    UID,
    vendor,
    date: Date.now(),
    status,
  }
}

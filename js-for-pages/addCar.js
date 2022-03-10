import { SERVER } from '../settings.js'

const URL = SERVER + '/cars'

export function addAddCarHandlers() {
  document.getElementById('btn-add-car').onclick = addCar
}

function addCar() {
  const car = {}

  car.brand = document.getElementById('input-brand').value
  car.model = document.getElementById('input-model').value
  car.pricePrDay = document.getElementById('input-price').value
  car.bestDiscount = document.getElementById('input-discount').value

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(car),
  }

  fetch(URL, options)
    .then((res) => res.json())
    .then((newCar) => {
      document.getElementById('car-info-all').innerText = JSON.stringify(newCar)
    })
    .catch((e) => console.error(e))
}

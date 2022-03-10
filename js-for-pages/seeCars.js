import { SERVER } from '../settings.js'

const URL = SERVER + '/cars'

export function getAllCars() {
  fetch(URL)
    .then((res) => res.json())
    .then((cars) => makeRows(cars))
    .catch((e) => console.error(e))
}

function makeRows(rows) {
  const trows = rows
    .map(
      (car) => `
    <tr>
    <td>${car.id}</td>
    <td>${car.brand}</td>
    <td>${car.model}</td>
    <td>${car.pricePrDay}</td>
    </tr>
  `
    )
    .join('\n')

  document.getElementById('car-rows').innerHTML = trows
}

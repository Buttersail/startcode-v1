import { renderTemplate, setActive, showPage } from './utils.js'
import { getAllCars } from './js-for-pages/seeCars.js'
import { addAddCarHandlers } from './js-for-pages/addCar.js'

function renderMenuItems(evt) {
  const element = evt.target
  setActive(element)
  const id = element.id
  renderTemplate(id) //This setups the HTML for the page
  switch (id) {
    //Here you can execute JavaScript for the selected page
    case 'page-see-cars': {
      getAllCars()
      break
    }
    case 'page-add-cars': {
      addAddCarHandlers()
      break
    }
  }
}

document.getElementById('menu').onclick = renderMenuItems
showPage('page-1') //Set the default page to render

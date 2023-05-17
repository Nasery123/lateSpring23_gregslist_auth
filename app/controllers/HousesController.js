import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { housesService } from "../services/HousesService.js"
import { getFormData } from "../utils/FormHandler.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawHouses() {
    console.log('this function draws the houses')
    let template = ''
    AppState.houses.forEach(h => {
        template += h.HouseTemplate
    })

    setHTML('house', template)
}
function _drawButton() {
    if (AppState.account) {
        setHTML('button', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#button-id" >OPEN THE MODAL</button>')
    }
}











export class HousesController {
    constructor(data) {
        //AppState.on('houses', _drawHouses)
        setHTML('houseForm', House.HouseForm())
        _drawButton()

        AppState.on('houses', _drawHouses)
        //AppState.on()

    }

    async getHousesFromApi() {
        try {
            await housesService.getHousesFromApi()

        } catch (error) {
            Pop.error(error)
        }

    }





















    async createHouse(formData) {
        try {
            window.event.preventDefault()
            const form = window.event?.target
            const formData = getFormData(form)
            console.log('here is the form data', formData)
            await housesService.creatHouse(formData)
            form.reset()

        } catch (error) {
            Pop.error(error)

        }

    }
}

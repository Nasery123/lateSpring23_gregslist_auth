import { AppState } from "../AppState.js"
import { Account } from "../models/Account.js"
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
        setHTML('button-id', '<button class="btn btn-dark square" data-bs-toggle="modal" data-bs-target="#button-id" >OPEN THE MODAL</button>')
    }
}











export class HousesController {
    constructor() {
        //AppState.on('houses', _drawHouses)
        setHTML('houseForm', House.HouseForm())
        _drawButton()


        //AppState.on()
        AppState.on('account', _drawButton)

        this.getHousesFromApi()
        AppState.on('houses', _drawHouses)
        AppState.on('account', _drawHouses)

    }

    async getHousesFromApi() {
        try {
            await housesService.getHousesFromApi()

        } catch (error) {
            Pop.error(error)
        }

    }





















    async createHouse() {
        try {
            window.event.preventDefault()
            const form = window.event?.target
            const formData = getFormData(form)
            console.log('here is the form data', formData)
            await housesService.createHouse(formData)
            form.reset()
            bootstrap.Modal.getOrCreateInstance('button-id').hide()

        } catch (error) {
            Pop.error(error)

        }

    }

    async deletHouse(id) {
        try {
            const yes = await Pop.confirm('do you want to delet your house')
            if (!yes) {
                await housesService.deletHouse(id)

            }
        } catch (error) {
            Pop.error(error)

        }
    }



}

import { AppState } from "../AppState.js"
import { House } from "../models/House.js"
import { api } from "./AxiosService.js"


class HousesService {








    async creatHouse(formData) {
        const res = await api.post('api/houses', formData)
        console.log('here is the homes', formData)

        console.log('this is the house', AppState.houses)

    }




    async getHousesFromApi() {
        const res = await api.get('api/houses')

        console.log('here is the houses services', res.data)
        AppState.houses = res.data.map(h => new House(h))
    }
}
export const housesService = new HousesService()

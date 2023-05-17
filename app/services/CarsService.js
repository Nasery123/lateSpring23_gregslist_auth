import { AppState } from "../AppState.js"
import { Car } from "../models/Car.js"
import { api } from "./AxiosService.js"

class CarsService {
  async deleteCar(id) {
    const res = await api.delete(`api/cars/${id}`)
    console.log('did the car get delorted????', res.data)
    AppState.cars = AppState.cars.filter(c => c.id != id)
  }

  async getCarsFromApi() {
    const res = await api.get('api/cars')
    // do not forget to map
    console.log('[🐟, 🐠, 🐡] -> 🍣, 🍣, 🍣', res.data)
    AppState.cars = res.data.map(c => new Car(c))
    console.log('wut the car', AppState.cars)
  }


  async createCar(formData) {
    // STEP 1 - Send the form data to be validated and Create a new Car
    // 📡 let's send the form data to the api
    const res = await api.post('api/cars', formData)
    // we only reach here if the server thought the formData was good...
    console.log('what is the data we get back... 🤷‍♂️', res.data)
    // ⚠️ Do not use map on a single item
    console.log('🐟 -> 🍣', res.data)

    // STEP 2 - take the response and let the user know their form was successful
    // we add the data to the AppState
    const newCar = new Car(res.data)
    AppState.cars.push(newCar)
    // 👂triggers the listeners
    AppState.emit('cars')


  }


}


export const carsService = new CarsService()

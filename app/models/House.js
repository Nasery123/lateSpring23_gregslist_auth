import { AppState } from "../AppState.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.imgUrl = data.imgUrl
        this.price = data.price
    }
    get HouseTemplate() {
        return /*html*/`
    <div class="col-md-4 my-3">
      <div class="card elevation-1">

        <img class="rounded-top" src="${this.imgUrl}" alt="">
        <p>BEDROOMS: ${this.bedrooms} </p>
        <p>BATHROOMS:${this.bathrooms}</p>

        $${this.price}
        </div>
        </div>
        `





    }

    static HouseForm() {
        return /*html*/`
        <div class="flex-end">
        <h1 class="title fs-5" id="form">LIST NEW HOUSE </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onsubmit="app.HousesController.createHouse()">
        <div class="body container-fluid">
          <section class="row">
            <div class="mb-3 col-6">
              <label for="bedroom" class="form-label">Bedrooms</label>
              <input required type="number" class="form-control" id="bedroom" name="bedroom">
            </div>
            <div class="mb-3 col-6">
              <label for="bathroom" class="form-label">Bathrooms</label>
              <input required type="number" class="form-control" id="bathroom" name="bathroom">
            </div>
            <div class="mb-3 col-6">
              <label for="Garage" class="form-label">Garage</label>
              <input required type="number" class="form-control" id="Garage" name="Garage">
            </div>
            <div class="mb-3 col-6">
              <label for="price" class="form-label">price</label>
              <input required type="number" class="form-control" id="price" name="price">
            </div>
            <div class="mb-3 col-6">
              <label for="imgUrl" class="form-label">Image</label>
              <input required type="" class="form-control" id="image" name="image">
            </div>



          </section>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">CLOSE</button>
        <button type="submit" class="btn btn-success">SUBMIT</button>
      </div>
      </form>`
    }
}

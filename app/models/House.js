import { AppState } from "../AppState.js"

export class House {
  constructor(data) {
    this.id = data.id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    // why this image url is comming as undifined? is it beacuse it its not required.

    this.imgUrl = data.imgUrl || 'https://media.hd.pics/2/m0b4wn1gn9.jpg'
    this.price = data.price
    this.description = data.description
    this.levels = data.levels
    this.year = data.year
    this.creatorId = data.creatorId

  }
  get HouseTemplate() {
    return /*html*/`
    <div class="col-md-4 my-3">
      <div class="card elevation-1">

        <img class="rounded-top" src="${this.imgUrl}" alt=" a nice house ">
        <p>BEDROOMS: ${this.bedrooms} </p>
        <p>BATHROOMS:${this.bathrooms}</p>
        <p>${this.description}</p>
        <p>${this.levels}</p>
        <p>${this.year}</p>


        $${this.price}




        <button class="btn btn-danger" onclick="app.HousesController.deleteHouse('${this.id}')">🗑️</button>
        </div>
        </div>
        `





  }

  // get deletIfHousesIsYours() {
  //   if (this.creatorId != AppState.account?.id) {
  //     return ''
  //   }
  //   return/*html*/`

  // }

  static HouseForm() {
    return /*html*/`
      < div class=" modal-header flex-end" >
        <h1 class="modal-title fs-5" id="exampleModalLabel">LIST NEW HOUSE </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </ >
      <form onsubmit="app.HousesController.createHouse()">
        <div class="modal-body container-fluid">
          <section class="row">
            <div class="mb-3 col-6">
              <label for="bedrooms" class="form-label">Bedrooms</label>
              <input required type="number" class="form-control" id="bedrooms" name="bedrooms">
            </div>
            <div class="mb-3 col-6">
              <label for="bathrooms" class="form-label">Bathrooms</label>
              <input required type="number" class="form-control" id="bathrooms" name="bathrooms">
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
              <input type="url" class="form-control" id="img" name="img">
            </div>
            <div class="mb-3 col-6">
              <label for="levels" class="form-label">Levels</label>
              <input required type="number" class="form-control" id="levels" name="levels">
            </div>
            <div class="mb-3 col-6">
              <label for="description" class="form-label">description</label>
              <input required type="text" class="form-control" id="description" name="description">
            </div>
            <div class="mb-3 col-6">
              <label for="year" class="form-label">year</label>
              <input required type="" class="form-control" id="year" name="year">
            </div>
        </div>


      </section>
        </div >
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">CLOSE</button>
        <button type="submit" class="btn btn-success">SUBMIT</button>
      </div>
      </form > `
  }


  // get deletButton() {
  //   if (this.creatorId != AppState.account.id) {
  //     return ''
  //   }
  //   return `
  //   button class="btn btn-warning" onclick = "app.HouseController.deletHouse('${this.id}')> 🗑️ </button>`
  // }
}

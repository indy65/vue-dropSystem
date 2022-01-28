class Quality {
    constructor() {
        this.name = this.setQuality()
    }

    setQuality() {
        let rand = Math.random() * 100
        console.log(rand)
        if (rand <= 50) {
            return "commun"
        }
        if (rand <= 80) {
            return "rare"
        }
        if (rand <= 95) {
            return "epic"
        }
        if (rand <= 100) {
            return "legendary"
        }

    }
}

const guns = [
    { name: "USP", imageurl: require("./assets/USP.png") },
    { name: "AK-47", imageurl: require("./assets/AK-47.png") },
    { name: "Deagle", imageurl: require("./assets/Deagle.png") }]

class Gun {
    constructor() {

        this.name = this.setGun()


        this.quality = new Quality().name
    }
    setGun() {
        let rand = Math.random() * 100

        if (rand <= 60) {
            this.SetImage(guns[0].imageurl)
            return guns[0].name
        }
        if (rand <= 90) {
            this.SetImage(guns[1].imageurl)
            return guns[1].name
        }
        if (rand <= 100) {
            this.SetImage(guns[2].imageurl)
            return guns[2].name
        }


    }
    SetImage(image) {
        this.imageurl = image
    }
}

export default Gun

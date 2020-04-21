let pet = {
    name: "Casey",
    species: "Blue Heeler",
    nicknames: ["Case", "Casey Baby"],
    age: 1,
    bark: function (){
        window.alert("WOOF")
    },
    whine: function (){
        window.alert("WHINE")
    },
    growl: function (){
        window.alert("GRRRRR")
    }
}
pet.bark();
pet.whine();
pet.growl();
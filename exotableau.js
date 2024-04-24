var peoples_formation = [
    {
        firstName: "Yannis",
        lastName: "Ghartouchent",
        dateStart: 1999,
        PlaceofBirth : "Montbeliard",
    },
    {
        firstName:"Toinon",
        lastname: "Chretien",
        dateStart: "2002",
        age: 16,
        PlaceofBirth: "Belfort",
    }
]





peoples_formation.push({
    
        firstName:"Jordan",
        lastName: "Bouaissa",
        dateStart: "2001",
        age: 12,
        PlaceofBirth: "Montbeliard",
    })


/* console.log("Prénom :", peoples_formation[0].firstName)
console.log("Nom :", peoples_formation[0].lastName)
console.log("PlaceofBirth :", peoples_formation[0].PlaceofBirth, "\n")

console.log("Prénom :", peoples_formation[1].firstName)
console.log("Nom :", peoples_formation[1].lastName)
console.log("PlaceofBirth :", peoples_formation[1].PlaceofBirth, "\n")

console.log(`Il y a ${peoples_formation.length} personne(s) dans la formation`) */



for (var i = 10; i < 100; i++) {
    peoples_formation.push({
        firstName: "Louis"+i,
        lastName: "Labroquante",
        age: 33+i,
        dateStart: "12-12-1950",
       PlaceofBirth: "Paris",
})
}



for (var i = 0; i< peoples_formation.length; i++) {
    if (peoples_formation[i].firstName === "Louis55") {
    console.log(`Prenom : ${peoples_formation[i].firstName}`)
    console.log("Nom :", peoples_formation[i].lastName)
    console.log("PlaceofBirth :", peoples_formation[i].PlaceofBirth)
    console.log(`Il est à la ${i} position dans le tableau \n`)
}
}

var tableau_plus_de_50 = []
for (var i = 0; i < peoples_formation.length; i++) {
if (peoples_formation[i].age > 50) {
tableau_plus_de_50.push({...peoples_formation[i]})
}
}
console.log(`J'ai ${tableau_plus_de_50.length} personne(s) qui ont plus de 50 ans dans mon tableau`)

// Stockage d'un element unique avec Obj
var obj_people = {}

for (var i = 0; i < peoples_formation.length; i++) {
    obj_people[peoples_formation[i].firstName] = peoples_formation[i]
}

console.log(obj_people["Louis55"])         



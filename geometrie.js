let rectangle = {
    x:50,
    y:120,
    Largeur: 30,
    Longueur: 70,
}

console.log(rectangle)
rectangle.perimetre = (rectangle.Largeur + rectangle.Longueur + rectangle.Largeur + rectangle.Longueur)
console.log(rectangle)
rectangle.unite = " cm"
rectangle.area = rectangle.Longueur*rectangle.Largeur
console.log(rectangle)
rectangle.diagonale = Math.sqrt(rectangle.Largeur*rectangle.Largeur + rectangle.Longueur*rectangle.Longueur)
rectangle.diagonale = Number(Math.round(rectangle.diagonale.toFixed(2)))
console.log(rectangle.diagonale+rectangle.unite)
console.log("\nX :", rectangle.x+rectangle.unite)
console.log("Y :",rectangle.y+rectangle.unite)
console.log("Largeur :",rectangle.Largeur)
console.log("Longeur :",rectangle.Longueur)
console.log("perimetre :",rectangle.perimetre+rectangle.unite)
console.log("area :",rectangle.area + rectangle.unite, "2")
console.log("diagonale :",rectangle.diagonale+rectangle.unite)
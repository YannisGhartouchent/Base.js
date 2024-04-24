var age = 20;

if (age >= 18) {
    console.log ("Tu es majeur !")
    authorized = true
}
else {
    console.log("Tu es mineur !")
}

console.log("Salut comment vas-tu ?")

console.log (`Autorisé : $(authorized)`)

var authorized2 = age >= 18 ? true : false
console.log(`Autorisé : $authorized2)`)
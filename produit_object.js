let produit = {
    nom: "Pull",
    prix: 100,
    stock: 30,
    nombre_vendu: 10,
}
console.log(produit)
produit.gain = produit.prix* produit.nombre_vendu
console.log(produit)

produit.valeur_stock = produit.prix*produit.stock

console.log("Produit :", produit.nom, "/ Gain :", produit.gain, "/ Valeur stock :", produit.valeur_stock)

produit.cost = 30
produit.total_cost = produit.cost*(produit.nombre_vendu + produit.stock)
console.log("Somme d'achat des produits : ", produit.total_cost)
let benefice_par_produit = produit.prix - produit.cost
console.log("Bénéfice par produit : ", benefice_par_produit)
let pourcentage_benefice = 100*(benefice_par_produit/produit.prix)
console.log("Pourcentage bénéfice par produit :", pourcentage_benefice+"%~" , Math.round(pourcentage_benefice)+"%")


var min = 713251378
var max = 1713251378

var wallet = {
    depenses: [] 
}


var data = [
    {
    type: "Santé",
    descriptions: ["Consultation médicale chez un généraliste", "Médicaments sur ordonnance","Frais d'hospitalisation","Examens médicaux tels que des radiographies","IRM",
    "Traitements de physiothérapie", "Consultation chez un dentiste", 
    "Achats de dispositifs médicaux comme des prothèses auditives","Frais de psychologue","Vaccins"],
    price_max: 1000,
    price_min: 300,
},
{
    type : "Loisir",
    descriptions: ["Billets de cinéma pour une sortie entre amis",
    "Frais d'inscription à un club de fitness ou de yoga",
    "Abonnement à un service de streaming pour regarder des séries et des films à la maison",
    "Achats de jeux vidéo pour console ou PC",
    "Frais d'adhésion à un club de lecture ou à une bibliothèque",
    "Billets pour assister à un concert ou à un festival de musique",
    "Location d'équipement de sport pour une journée d'escalade ou de kayak",
    "Frais d'entrée à un parc d'attractions ou à un parc aquatique",
   "Cours de cuisine ou d'art pour une activité créative",
    "Abonnement à un magazine ou à un journal spécialisé dans un domaine d'intérêt personnel"],
    price_max: 10,
    price_min: 100,
},
    {
    type : "Sortie",
    descriptions: ["Frais de transport",
        "Billets d'entrée pour les attractions",
        "Location d'équipement",
        "Frais de divertissement","Achats de souvenirs ou de cadeaux",
        "Frais de stationnement ou de péage",
        "Frais de réservation",
        "Frais de gardiennage ou de garde d'animaux de compagnie si nécessaire",
         "Frais de communication",],
         price_max: 20,
         price_min: 300,
    },
    {
    type: "Loyer",
    descriptions: ["Paiement mensuel du loyer pour l'appartement",
    "Frais de location pour le mois de [mois]",
    "Location résidentielle pour la période de [dates]",
    "Charges mensuelles pour le logement principal",
    "Versement du loyer pour l'unité de logement à [adresse]",
    "Location mensuelle pour le domicile familial",
    "Dépense mensuelle pour l'occupation de la résidence principale",
    "Montant dû pour le loyer du [date de début] au [date de fin]",
    "Location habituelle pour l'unité de logement",
    "Paiement récurrent du loyer pour le logement"]
    }
]

for (var i = 0; i < 1000; i++){
    var object_type = data [Math.round(Math.random()* ((data.length -1) -0)+0)]
    var object_description = object_type.descriptions [Math.round(Math.random()* ((object_type.descriptions.length-1)-0)+0)]

    wallet.depenses.push ({
        data: Math.round(Math.random()* (max-min) + min),
        type: object_type.type,
        price: Math.round(Math.random()*(object_type.price_max-object_type.price_min) + object_type.price_min),
        descriptions: object_description
})
}
console.log(wallet.depenses)

console.log("Taille tableau", wallet.depenses.length)



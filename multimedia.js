var data = {
    music: [],
video: [],
podcast: [],
}

/* titre :String
artiste : String
studio : String
language : String , FR (pair) ou EN (impair)
time : Number, - 1450 à 54596
dateRelease: String/Date,
album : String */



var min = 1451
var max = 54596


for (var i = 0; i < 500; i++) {
    var language = "FR"
    if (i % 2 !== 0)
        language = "EN"


    data.music.push({

        titre: "Hello" + i,
        artiste: "HelloMan" + i,
        studio: "HelloMusic" + i,
        language: language,
        time: Math.random() * (max - min) + min,
        dateRelease: 123456 + i,
        album: "HelloAlbum"
    })
}

for (var i = 0; i < data.music.length; i++) {
    console.log(`Titre : ${data.music[i].titre} / Artiste : ${data.music[i].artiste} / Language : ${data.music[i].language}`)
}



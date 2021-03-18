function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Halid Beslic",
            title: "Miljacka",
            release_year: 2018,
            id: 2,
            formats: {
                1: "DVD",
                2: "MP4",
                3: "MP3"
            }
        }
    };
    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;

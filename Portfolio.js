#!/usr/local/bin/node

const arrayVerb = ['running', 'leaping', 'getting', 'wandering', 'building'];

const arrayAdjective = ['vibrant', 'mysterious', 'serene', 'gritty', 'eccentric'];

const arrayAnimalNoun = ['Fox', 'Ox', 'Pig', 'Cat', 'Pony'];
const arrayVehicleNoun = ['Car', 'Van', 'Train', 'Bike', 'Plane'];
const arrayJobNoun = ['Lawyer', 'Engineer', 'Teacher', 'Musician', 'Scientist'];

const arrayWeather = ['sunny', 'rainy', 'cloudy', 'snowy', 'windy'];

const arrayLocation = ['London', 'Paris', 'Munich', 'New York', 'Washington'];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function randomIndexNoun(array) {
    return Math.floor(Math.random() * array.length);
}

function indexArrays() {
    //select a random noun from the three arrays
    const nounArrays = [arrayAnimalNoun, arrayVehicleNoun, arrayJobNoun];
    const selectedNounArray = nounArrays[randomIndexNoun(nounArrays)];
    
    let verbIndex = randomIndex(arrayVerb);
    let adjectiveIndex = randomIndex(arrayAdjective);
    let  nounIndex= randomIndex(selectedNounArray);
    let locationIndex = randomIndex(arrayLocation);
    let weatherIndex = randomIndex(arrayWeather);
        
    return {
        Verb: arrayVerb[verbIndex],
        Adjective: arrayAdjective[adjectiveIndex],
        Noun: selectedNounArray[nounIndex],
        Weather: arrayWeather[weatherIndex],
        Location: arrayLocation[locationIndex],
    };
};

let words = indexArrays();

let sentence = "The " + words.Adjective + " " + words.Verb + " " + words.Noun + " " + "went travelling to " + words.Weather + " " + words.Location + ".";

console.log(sentence);



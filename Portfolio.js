#!/usr/local/bin/node

const arrayVerb = ['running', 'leaping', 'getting', 'wandering', 'building'];

const arrayAdjective = ['vibrant', 'mysterious', 'serene', 'gritty', 'eccentric'];

const arrayNoun = ['Fox', 'Ox', 'Pig', 'Cat', 'Pony'];

const arrayWeather = ['sunny', 'rainy', 'cloudy', 'snowy', 'windy'];

const arrayLocation = ['London', 'Paris', 'Munich', 'New York', 'Washington'];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function indexArrays() {
    let verbIndex = randomIndex(arrayVerb);
    let adjectiveIndex = randomIndex(arrayAdjective);
    let nounIndex = randomIndex(arrayNoun);
    let locationIndex = randomIndex(arrayLocation);
    let weatherIndex = randomIndex(arrayWeather);
        
    return {
        Verb: arrayVerb[verbIndex],
        Adjective: arrayAdjective[adjectiveIndex],
        Noun: arrayNoun[nounIndex],
        Weather: arrayWeather[weatherIndex],
        Location: arrayLocation[locationIndex],
    };
};

let words = indexArrays();

let sentence = "The " + words.Adjective + " " + words.Verb + " " + words.Noun + " " + "went travelling to " + words.Weather + " " + words.Location + ".";

console.log(sentence);



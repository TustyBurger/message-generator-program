#!/usr/local/bin/node

const arrayVerb = ['running', 'leaping', 'getting', 'wandering', 'building'];

const arrayAdjective = ['vibrant', 'mysterious', 'serene', 'gritty', 'eccentric'];

const arrayNoun = ['Fox', 'Ox', 'Pig', 'Cat', 'Pony'];

function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function indexArrays() {
    let verbIndex = randomIndex(arrayVerb);
    let adjectiveIndex = randomIndex(arrayAdjective);
    let nounIndex = randomIndex(arrayNoun);
    
    return {
        Verb: arrayVerb[verbIndex],
        Adjective: arrayAdjective[adjectiveIndex],
        Noun: arrayNoun[nounIndex],
    };
};

let words = indexArrays();

let sentence = words.Verb + " " + words.Adjective + " " + words.Noun + ".";

console.log(sentence);



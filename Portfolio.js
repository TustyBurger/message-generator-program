#!/usr/local/bin/node

const arrayVerb = ['running', 'leaping', 'getting', 'wandering', 'building'];

const arrayAdjective = ['vibrant', 'mysterious', 'serene', 'gritty', 'eccentric'];

const arrayNoun = ['Fox', 'Ox', 'Pig', 'Cat', 'Pony'];

function indexArrays() {
    let verbIndex = Math.floor(Math.random() * arrayVerb.length);
    let adjectiveIndex = Math.floor(Math.random() * arrayAdjective.length);
    let nounIndex = Math.floor(Math.random() * arrayNoun.length);
    
    return {
        Verb: arrayVerb[verbIndex],
        Adjective: arrayAdjective[adjectiveIndex],
        Noun: arrayNoun[nounIndex],
    };
};

let words = indexArrays();

let sentence = words.Verb + " " + words.Adjective + " " + words.Noun + ".";
//console.log(indexArrays());
console.log(sentence);



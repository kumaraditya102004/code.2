let prompt = require("prompt-sync")();
let s = prompt ("Enter a string");
let consonent = 0, vowel =0;

for(let i=0;i<s.length;i++){

        let ch = s.charAt(i);
        switch(ch){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            vowel++;
            break;


            default: consonent++;
        }

    }

    console.log("consonants: " + consonent);
    console.log("vowels: " + vowel);

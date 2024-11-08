"use strict";
{
    const countWordOccurrences = (sentence, word) => {
        sentence = sentence.toLowerCase();
        word = word.toLowerCase();
        let count = 0;
        const words = sentence.split(' ');
        for (const wrd of words) {
            if (wrd.includes(word))
                count++;
        }
        return count;
    };
    // console.log(countWordOccurrences("I Love Typescripts", "TypeScript"));
}

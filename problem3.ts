{
    const countWordOccurrences = (sentence: string, word: string): number => {
        sentence = sentence.toLowerCase();
        word = word.toLowerCase();

        let count: number = 0;
        const words: string[] = sentence.split(' ');

        for (const wrd of words) {
            if (wrd.includes(word)) count++;
        }

        return count;
    };

    // console.log(countWordOccurrences("I Love Typescripts", "TypeScript"));
}
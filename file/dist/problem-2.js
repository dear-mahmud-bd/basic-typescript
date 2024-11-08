"use strict";
{
    const removeDuplicates = (arr) => {
        const unqNums = [];
        for (const num of arr) {
            if (!unqNums.includes(num))
                unqNums.push(num);
        }
        return unqNums;
    };
    // console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}

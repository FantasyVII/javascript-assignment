/*
Q1. Please write the code to find out the alphabet which is repeated 
    the most in the following string:  afjghweqweaaadfraaaasdenas
*/
const findMostDuplicatedLetter = (input) => {

    let duplicates = {}
    let mostDuplicatedLetter = ''

    for (let i = 0; i < input.length; i++) {
        const element = input[i]

        if (!duplicates[element])
            duplicates[element] = 0

        duplicates[element]++

        if (mostDuplicatedLetter == '' || duplicates[element] > duplicates[mostDuplicatedLetter]) {
            mostDuplicatedLetter = element
        }
    }

    return {
        letter: mostDuplicatedLetter,
        count: duplicates[mostDuplicatedLetter]
    }
}

const letter = findMostDuplicatedLetter('afjghweqweaaadfraaaasdenas')
console.log(letter)


/*
Q2. Please write the code to convert the following two-dimensional 
    ordered array to one-dimensional ordered array.

var  arr1 = [[1,2,3],[4,5,6],[7,8,9],[1,2,3],[4,5,6]];
var  arr2 = [[1,4,6],[7,8,10],[2,6,9],[3,7,13],[1,5,12]];
*/
const convert2DArrayTo1DOrderedArray = (...args) => {
    arr1d = []

    for (let i = 0; i < args.length; i++) {
        arr1d = [...arr1d.concat(...args[i])]
    }

    arr1d.sort((a, b) => a - b)
    return arr1d
}

const array = convert2DArrayTo1DOrderedArray(
    [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 2, 3], [4, 5, 6]],
    [[1, 4, 6], [7, 8, 10], [2, 6, 9], [3, 7, 13], [1, 5, 12]]
)

console.log(array)
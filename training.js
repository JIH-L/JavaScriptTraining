//! -- findOdd -- //
let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
// A = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]

function findOdd(A) {
    if (A.length > 1) {
        var result = {};
        A.forEach(function (item) {
            result[item] = result[item] ? result[item] + 1 : 1;
        });
        // console.log("result", result); // result { '1': 2, '3': 2, '5': 3, '-1': 2 }
        let result_values = Object.values(result);
        // console.log("result_values", result_values); // result_values [ 2, 2, 3, 2 ]
        for (let C in result) {
            let D = result[C]
            if (D % 2 == 1) {
                // console.log("Odd = ", D); // Odd =  3
                for (const [key, value] of Object.entries(result)) {
                    // console.log(`${key}, ${value}`) // 1, 2  3, 2  5, 3
                    if (D === value)
                        return parseInt(key);
                }
            }
        }
    } else {
        console.log(A[0])
        return A[0]
    }
}
findOdd(A); // 5


//! -- even_or_odd -- //
function even_or_odd(number) {
    if (number % 2 == 0)
        return "Even"
    else if (number % 2 == 1)
        return "Odd"
}
even_or_odd(2); // Even


//! -- isIsogram -- //
function isIsogram(str) {
    let str2 = str.toUpperCase();
    let strArr = []
    for (let i = 0; i < str2.length; i++) {
        strArr.push(str2[i])
    }
    console.log(strArr);
    let result = strArr.filter((e, index, arr) => {
        return arr.indexOf(e) !== index;
    })
    console.log(result.length);
    if (result.length === 0) {
        return true
    } else return false
}
isIsogram("Dermatoglyphics") // true
isIsogram("aba") // false


//! --  reverses the string -- //
function solution(str) {
    let result = ""
    for (let i = 1; i < str.length + 1; i++) {
        result += str.substr(-i, 1);
    }
    return result;
}
solution('world') // dlrow


//? -- printerError -- //
var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
var v = "aaaxbbbbyyhwawiwjjjwwm"

function printerError(s) {
    let total = s.length
    console.log(total)
    let result = s.match(/[n-z]./)
    console.log(result);
}
printerError(s)


//! -- DNAStrand -- //
function DNAStrand(dna) {
    let result = dna.replace(/A|T|G|C/g, (e) => {
        var dnaMap = {
            'A': 'T',
            'T': 'A',
            'G': 'C',
            'C': 'G'
        };
        return dnaMap[e]
    })
    console.log(result);
}
// DNAStrand("AAAA")
DNAStrand("ATTGC") // TAACG
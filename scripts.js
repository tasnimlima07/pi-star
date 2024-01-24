const piValue = '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067'
// initially, piArray empty
const piArray = []
console.log("piArray = ", piArray)

// amra eta theke pi er star print korbo
const piArrayToPrint = []
console.log("piArrayToPrint = ", piArrayToPrint)

// the soul purpose of this function is to
// print stars from piArrayToPrint
const printStars = () => {
    console.log("printing stars")

    let stars = ""
    piArrayToPrint.map((piDigit, index) => {
        // other way to create array and to loop
        // [...Array(piDigit).keys()].map()
        for (let counter = 0; counter < piDigit; counter++) {
            stars = stars.concat("*")
        }

        // this will not add newline last
        if (index !== piArrayToPrint - 1) {
            stars = stars.concat("\n")
        }
    })
    console.log("stars = ", stars)

    // setting value to html
    const outputArea = document.getElementById("outputArea")
    outputArea.innerHTML = stars
}

const createStars = () => {
    console.log("creating stars")
    console.log("piArrayToPrint = ", piArrayToPrint)
    const numberToPrint = parseInt(document.getElementById("numDigits").value)
    console.log("numberToPrint = ", numberToPrint)

    // clearing piArrayToPrint first
    piArrayToPrint.splice(0, piArrayToPrint.length)

    // totally show off, for learning purpose
    // this will loop numberToPrint of times
    // index holo array index
    // https://www.w3schools.com/jsref/jsref_map.asp
    Array(numberToPrint).fill().map((_, index) => {
        // this will copy the value from piArray to piArrayToPrint
        // this line is always adding numbers
        piArrayToPrint.push(piArray[index])
    })
    // ei koytar star print korte hobe
    console.log("piArrayToPrint = ", piArrayToPrint)

    printStars()
}

const clearScreen = () => {
    console.log("clearing stars")

    // emptying piArrayToPrint
    // https://www.w3schools.com/jsref/jsref_splice.asp
    // see also: https://www.w3schools.com/jsref/jsref_slice_array.asp
    piArrayToPrint.splice(0, piArrayToPrint.length)
    console.log("piArrayToPrint = ", piArrayToPrint)

    //printing stars
    printStars()
}

const createStarsReversed = () => {
    console.log("reversing stars")
    //simple way reversing
    // remember, some functions does not require to assign
    // we do not need to write piArrayToPrint = piArrayToPrint.reverse()
    // for concat, it is needed. value = value.concat("1")
    // for slice, it is needed. value = value.slice(1,2)
    // for splice, not needed. value.splice(1,2)
    piArrayToPrint.reverse()

    //printing stars
    printStars()
}


const setPiArray = () => {
    // totally unnecessary ekta kaj. just, shekhar jonne add korlam
    // eta kono ekta string theke dot remove korbe
    // piValueWithoutDot er moddhe new string assign korbe
    // /\./g eta regex expression. google kore dekhe nio
    // basically means select all characters with dots
    // 2nd argument is, select kora dot gula "" diye replace korbe
    // mane, dot gula remove hobe
    const piValueWithoutDot = piValue.replace(/\./g, "")
    console.log("piValueWithoutDot = ", piValueWithoutDot)

    // next task, convert pi string to array
    // digit holo, each piValue er digit gula 3,1,4,1.... details w3schools
    // https://www.w3schools.com/js/js_loop_forof.asp
    // using piValueWithoutDot for using dotless string
    for (digit of piValueWithoutDot) {
        // string.replace use na korle
        // eta likhleo hoto
        // if( digit !=="." )
        // pushing each digit in piArray
        piArray.push(Number(digit))
    }
    console.log("piArray = ", piArray)
    // amader basic array create kora shesh
    // amra ebar array niye kaj korbo
}

// first a, string theke array te convert korbo
// ei kaj ta, bar bar kora dorkar nai.
// shudhu ekbar korlei hobe.
// since, pi er value amra jani e
// screen load hobar shathe shathei, kaj ta kore fela jabe.
window.addEventListener('load', setPiArray)
// addEventListener holo,
// kono event er shathe ekta function add kore dey
// page load hobar shathe shathe load function call hoy
// load function call korar shathe shathe,
// amra arekta function call korte chai jeta
// string theke array te convert korbe
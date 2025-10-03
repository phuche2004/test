let i = 1
let text = "hello"
// console.log(`this is ${text}`)
// let a = 3
function human(name, age) {
    return {
        name, age,
    }
}

// console.log(human('phuc', 3))
let arr = [1, 26, 34, 43, 54, 63, 79, 83, 99]
// console.log(arr.length)


//  Array 1
let a = [4, 8, 0, 0, 2, 0, 1, 0]

function zero(arr) {

    b = arr.filter(function (num) {
        return num !== 0;
    })
    c = arr.filter(function (num) {
        return num === 0;
    })
    d = b.concat(c)
    return d
}

// console.log(zero(a))


//  Array 3
let arr2 = [-5, 1, -40, 20, 6, 8, 7]

function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === 15 && arr[i] !== arr[j]) {
                console.log(`True: (${arr[i]}), (${arr[j]})`);

            }
        }
    }
    return false
}

// sum(arr2)

//Array 4
let arr3 = [3, 4, 5, 2, 3, 9, 6, 23, 65, 2, 3, 5]

function sum2(arr) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            b = a
            a = arr[i]
        } else if (arr[i] >= b) {
            b = arr[i];
        }
    }

    console.log(a)
    console.log(b)
}

// sum2(arr3)

// Array 5
let arr4 = [-1, 0, 1, 2, -1, -4]

function sum3(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(` (${arr[i]}), (${arr[j]}), (${arr[k]})`);
                }
            }
        }
    }
}

// sum3(arr4)


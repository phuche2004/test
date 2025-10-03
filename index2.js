let obj = {x: 1, y: 3, z: 6}
let obj2 = {a: 2, ...obj}

// console.log(obj2)

function f(x, y, ...arguments) {
    console.log(arguments)
}

// f(1, 'phuc', 2, 3);

const a = 2;

const person = {
    name: 'John',
    age: 4,
    getDes: function () {
        console.log(this.name)

    }
}
// person.getDes()

const person2 = {
    name: "david",
    age: 23,
    getDescription: function () {
        console.log("Toi ten la " + this.name + ". Nam nay toi " + this.age + " tuoi")

        // Dùng arrow function - KHÔNG cần let that = this
        const getAge = () => {
            console.log("Nam nay toi " + this.age + " tuoi");
            // this ở đây vẫn trỏ về person2
        }

        getAge();
    },
}
person2.getDescription()
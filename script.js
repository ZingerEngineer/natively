// function Person(firstName, lastName, age, eyeColor) {
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
//   this.eyeColor = eyeColor
// }

// const father = new Person('Ahmed', 'Mahdy', 25, 'brown')
// console.log(father.firstName)

const person = {
  name: 'John',
  age: 30,
  greet: function () {
    console.log(this)
  },
  greetArrow: () => {
    console.log(this)
  }
}
person.greet() // Hello, my name is John
person.greetArrow()

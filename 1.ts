let newPerson = {name: 'priyam', age: 35}
let notesArr = [
  { name: "sahil", age: 21 },
  { name: "piyush", age: 25 },
  { name: "negi", age: 30 },
  newPerson
];

// forEach
notesArr.forEach(element => {
	console.log(element)
});


// map
let newGen = notesArr.map(person => ({...person, age: person.age + 20}))
console.log('newGen?', newGen)

// array.some
// arrat.every
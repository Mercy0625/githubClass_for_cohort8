const me = {
    name: 'MERCY EYAIFE',
    age: 20,
    gender: 'FEMALE',
    legal: true
}

me.nationality = 'NIGERIAN'
console.log(me)
me.nationality = 'FRENCH'
console.log(me)
delete me.legal
console.log(me)

const { name: myName, age, gender } = me
console.log(myName, age, gender)
console.log(myName)
console.log(age)
console.log(gender)

let mercy = {
    bestFriend: "Dami",
    hobbies: ['Reading', 'Eating', 'Coding'],
}
let mercyEyaife = {
    ...me,
    ...mercy,
    parents : "Dorcas and Anthony Eyaife",
    profession: "Software Engineer"
}
console.log(mercyEyaife)

console.log(Object.keys(mercyEyaife))
console.log(Object.values(mercyEyaife))
console.log(Object.entries(mercyEyaife))
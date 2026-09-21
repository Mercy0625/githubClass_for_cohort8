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

const { name, age, gender } = me
console.log(name, age, gender)
console.log(name)
console.log(age)
console.log(gender)
var person = new Object()

person['firstname'] = "Andrew"
person['lastname'] = "Whatevs"

var firstNameProperty = 'firstname'

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstname)

person.address = new Object()
person.address.street = '111 Main St.'
person.address.city = 'New York'
person.address.state = 'NY'

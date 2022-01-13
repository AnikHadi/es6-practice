// Object destructure
const person = {
    name: "Tom Latham",
    age: 19,
    id: 200,
    phone: "0123456789",
    address: "New Zealand",
    job: "Facebook",
    friends: ["Tom hanks", "Ema watson", "Justin Tudor", "Alai Vat"]
}

const person2 = {
    name: "Zidan",
    info: {
        Height: "1.85 m",
        Born: "June 23, 1972 ",
        Spouse: "Véronique Zidane",
        Children: "Enzo Fernández, Luca Zidane, Elyaz Zidane Fernández, Theo Zidane"
    }
}

const { name, id, phone, address, job, friends } = person;
console.log(name, "phone:", phone, "id:", id);

const { Height, Born, Children } = person2.info;
console.log(Height, "Born:", Born);

// Array destructure
const friendsArray = ['Amir Khan', 'Amin Khan', 'Sharuk Khan', 'Salman Khan'];

const [firstFriend, ...allFriends] = friendsArray;
console.log(firstFriend);
console.log(...allFriends);
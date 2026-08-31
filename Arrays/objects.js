const person = {
    "first name": "Zahiq",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    greet: function(){
        alert("Hello There!");
    }
};

person.isAdmin = true;
delete person.age;

const keyName = "first name";

console.log(person[keyName]);
//console.log(person); 



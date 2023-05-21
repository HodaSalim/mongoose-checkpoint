const mongoose = require("mongoose");
const Person = require("./Person.js");

mongoose.connect("mongodb://localhost/contacts");

Person.create([
  {
    name: "Mohammed",
    age: 25,
    favoriteFoods: ["pizza", "apple"],
  },
  {
    name: "Hoda",
    age: 28,
    favoriteFoods: ["burger", "watermelon"],
  },
  {
    name: "Baliegh",
    age: 25,
    favoriteFoods: ["feteer", "oranges"],
  },
]);
//then((person) => console.log(person));

//find all people with a given name
// Person.find({ name: "Mohammed" }).then((people) => console.log(people));

//find one person with a given favorite food
// Person.findOne({ favoriteFoods: "pizza" }).then((people) =>
//   console.log(people)
// );
// find one person with id
// Person.findById("646744ed328e93eb5caa6a5f").then((people) =>
//   console.log(people)
// );
// add a favorite food to a certain id
Person.findOne({ name: "Mohammed" })
  .then((person) => {
    person.favoriteFoods.push("hamburger");
    return person.save();
  })
  .then((person) => console.log("saved successfully", person));
// Person.save();

// Person.findOneAndUpdate(
//   { name: "Hoda" },
//   { $set: { age: 18 } },
//   { new: true }
// ).then((person) => console.log(person));

Person.findByIdAndDelete("646744ed328e93eb5caa6a5f").then((person) =>
  console.log(person)
);

// Person.deleteMany().then((deleted) => console.log(deleted));

Person.find()
  .where("favoriteFoods")
  .elemMatch({ favoriteFoods: "buritto" })
  .sort({ name: 1 })
  .limit(2)
  .select("-age");

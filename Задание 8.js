
//Задание 8

let fruits = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry",    "blue"]
]);
fruits.forEach((value, key) => {
    console.log(`${key} - x = ${value} - y`);
});
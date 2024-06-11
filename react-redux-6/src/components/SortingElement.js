// sort strings
const data = ["t", "e", "s", "z", "y", "A", "B", "a", "b"];
data.sort((a, b) => {
  return a.localeCompare(b);
});
console.log(data);

// sort numbers
const numbers = [32, 21, 2, 5, 65, 3, 4, 6, 1];
numbers.sort((a, b) => {
  return a - b;
});
console.log(numbers);

// sort objects
const objects = [
  // name, cost, weight of the vegetables
  { name: "tomato", cost: 32, weight: 5 },
  { name: "potato", cost: 21, weight: 3 },
  { name: "carrot", cost: 2, weight: 1 },
  { name: "onion", cost: 5, weight: 6 },
  { name: "garlic", cost: 65, weight: 4 },
  { name: "cucumber", cost: 3, weight: 2 },
  { name: "cabbage", cost: 4, weight: 7 },
  { name: "celery", cost: 6, weight: 8 },
  { name: "lettuce", cost: 1, weight: 9 },
];
// sort by cost
function getSortValue(vegetables) {
  return vegetables.cost;
}
// sort by cost
objects.sort((a, b) => {
  const valueA = getSortValue(a);
  const valueB = getSortValue(b);
  return valueA - valueB; // ascending order from smallest to largeest
});
console.log(objects);

function getSortWeight(vegetables) {
  return vegetables.weight;
}
// sort by weight
objects.sort((a, b) => {
  const valueA = getSortWeight(a);
  const valueB = getSortWeight(b);
  return valueB - valueA; // descending order from largest to smallest
});
console.log(objects);

// sort by name
function getSortName(vegetables) {
  return vegetables.name;
}
// sort by weight using condition to check wether string of number
objects.sort((a, b) => {
  const valueA = getSortName(a);
  const valueB = getSortName(b);
  if (typeof valueA === "string") {
    return valueA.localeCompare(valueB);
  }
  return valueA - valueB; // ascending order from smallest to largeest
});
console.log(objects);

// sort by avgerage
function getSortAverage(vegetables) {
  return vegetables.cost / vegetables.weight; // cost divided by weight
}
objects.sort((a, b) => {
  const valueA = getSortAverage(a);
  const valueB = getSortAverage(b);
  return valueA - valueB; // ascending order from smallest to largeest
});
console.log(objects);

// Create an empty map where the keys are integers and the values are characters
const myMap = {};

// Create an empty map where the keys are integers and the values are characters
console.log(Object.keys(myMap).length === 0);

/* Add the following key-value pairs to the map
 * Key | Value
 * ----+------
 * 97  | a
 * 98  | b
 * 99  | c
 * 65  | A
 * 66  | B
 * 67  | C
 */
myMap[97] = 'a';
myMap[98] = 'b';
myMap[99] = 'c';
myMap[65] = 'A';
myMap[66] = 'B';
myMap[67] = 'C';

// Print all the keys
console.log(Object.keys(myMap));

// Print all the values
console.log(Object.values(myMap));

// Add value D with the key 68
myMap[68] = 'D';

// Print how many key-value pairs are in the map
console.log(Object.keys(myMap).length);

// Print the value that is associated with key 99
console.log(myMap[99]);

// Remove the key - value pair where with key 97
delete myMap[97];

// Print whether there is an associated value with key 100 or not
console.log(100 in myMap);

// Remove all the key - value pairs
Object.keys(myMap).forEach((x) => { delete myMap[x]; });
console.log(myMap);

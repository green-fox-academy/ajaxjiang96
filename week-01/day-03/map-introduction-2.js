/* Create a map where the keys are strings and the values are strings with
  the following initial values:

  Key   Value
  978-1-60309-452-8   A Letter to Jo
  978-1-60309-459-7   Lupus
  978-1-60309-444-3   Red Panda and Moon Bear
  978-1-60309-461-0   The Lab
  */

const books = {
  '978-1-60309-452-8': 'A Letter to Jo',
  '978-1-60309-459-7': 'Lupus',
  '978-1-60309-444-3': 'Red Panda and Moon Bear',
  '978-1-60309-461-0': 'The Lab',
};

/* Print all the key-value pairs in the following format

  A Letter to Jo(ISBN: 978 - 1 - 60309 - 452 - 8)
  Lupus(ISBN: 978 - 1 - 60309 - 459 - 7)
  Red Panda and Moon Bear(ISBN: 978 - 1 - 60309 - 444 - 3)
  The Lab(ISBN: 978 - 1 - 60309 - 461 - 0)
  */
const printBooks = (B) => Object.keys(books).forEach((isbn) => console.log(`${B[isbn]}(ISBN: ${isbn})`));
// Object.keys(books).forEach((isbn) => console.log(`${books[isbn]}(ISBN: ${isbn})`));
printBooks(books);

// Remove the key - value pair with key 978-1-60309-444-3
delete books['978-1-60309-444-3'];
console.log('===');
printBooks(books);

// Remove the key - value pair with value The Lab
Object.keys(books).forEach((isbn) => (books[isbn] === 'The Lab' ? delete books[isbn] : null));
console.log('===');
printBooks(books);

/* Add the following key - value pairs to the map

  Key                 Value
  978-1-60309-450-4   They Called Us Enemy
  978-1-60309-453-5   Why Did We Trust Him ?
  */
books['978-1-60309-450-4'] = 'They Called Us Enemy';
books['978-1-60309-453-5'] = 'Why Did We Trust Him ?';
console.log('===');
printBooks(books);

// Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log('478-0-61159-424-8' in books);

// Print the value associated with key 978-1-60309-453-5
console.log(books['978-1-60309-453-5']);

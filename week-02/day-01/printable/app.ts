import Domino from "./Domino";
import Todo from "./Todo";

const dominoes: Domino[] = new Array<Domino>();
const todos: Todo[] = new Array<Todo>();

dominoes.push(new Domino(1, 2));
dominoes.push(new Domino(2, 3));
dominoes.push(new Domino(4, 1));
dominoes.push(new Domino(3, 4));

todos.push(new Todo("Buy Milk"));
todos.push(new Todo("Download games", ["Diablo"]));

for (const domino of dominoes) {
  domino.printAllFields();
}

console.log("My todo:");
for (const todo of todos) {
  todo.printAllFields();
}

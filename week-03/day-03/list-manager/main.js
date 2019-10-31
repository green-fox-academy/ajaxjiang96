'use strict';

// document.body

const left = ['bread', 'milk', 'orange', 'tomato'];
const right = [];

let currI = 0;
function renderMain() {
  document.body.appendChild(document.createElement('main'));
}

function renderItem(item, selected, isRight) {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  if (selected && !isRight) listItem.classList.add('selected');
  listItem.innerText = item;
  return listItem;
}
function renderList(items, isRight = false) {
  const list = document.createElement('ul');
  list.classList.add('list');
  items.forEach((item, i) => list.appendChild(renderItem(item, i === currI, isRight)));
  return list;
}

function renderButton(name, fn) {
  const but = document.createElement('button');
  but.innerText = name;
  but.onclick = fn;
  return but;
}
function reRender() {
  document.querySelector('main').innerHTML = '';
  render();
}

function remove() {
  if (currI < left.length) left.splice(currI, 1);
  currI = 0;
  reRender();
}

function move() {
  if (currI < left.length) right.push(left.splice(currI, 1));
  reRender();
}

function up() {
  if (currI > 0) currI -= 1;
  reRender();
}

function down() {
  if (currI < left.length) currI += 1;
  reRender();
}

function render() {
  const leftList = renderList(left);
  const rightList = renderList(right, true);
  document.querySelector('main').appendChild(leftList);
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('button-wrapper');
  buttonWrapper.appendChild(renderButton('Up', up));
  buttonWrapper.appendChild(renderButton('Down', down));
  buttonWrapper.appendChild(renderButton('X', remove));
  buttonWrapper.appendChild(renderButton('>', move));
  document.querySelector('main').appendChild(buttonWrapper);
  document.querySelector('main').appendChild(rightList);
}


function main() {
  renderMain();
  render();
}

main();

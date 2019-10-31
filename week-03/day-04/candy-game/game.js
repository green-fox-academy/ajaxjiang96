/* eslint-disable no-alert */
// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candies = 0;
let lollipops = 3;
let speed = 1.0;

function createCandies() {
  candies += 1;
  document.querySelector('.candies').textContent = candies;
}
function renderLollipop(n) {
  return [...Array(n)].map(() => '🍭').join('');
}
function render() {
  document.querySelector('.lollypops').textContent = renderLollipop(lollipops);
  document.querySelector('.candies').textContent = candies;
  document.querySelector('.speed').textContent = Math.floor(lollipops / 10) * 1 * speed;
}

function buyLollipop() {
  if (candies >= 100) {
    lollipops += 1;
    candies -= 100;
  }
  render();
}

function makeItRain() {
  speed *= 10;
  document.querySelector('.speed').textContent = Math.floor(lollipops / 10) * 1 * speed;
}

function main() {
  document.querySelector('.create-candies').onclick = createCandies;
  document.querySelector('.buy-lollypops').onclick = buyLollipop;
  document.querySelector('.candy-machine').onclick = makeItRain;
  const timer = setInterval(() => {
    candies += Math.floor(lollipops / 10) * speed;
    // console.log(candies)
    render();
    if (candies >= 10000) {
      alert('You won!');
      clearInterval(timer);
    }
  }, 1000);
}

main();

const scrollThreshold = 300;

function renderDiv() {
  const div = document.createElement('div');
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  div.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
  return div;
}

function render10Divs() {
  [...Array(10).keys()].forEach(() => {
    document.body.appendChild(renderDiv());
  });
}

function init() {
  const length = Math.ceil(Math.random() * 50);
  [...Array(length).keys()].forEach(() => {
    document.body.appendChild(renderDiv());
  });

  document.addEventListener('scroll', () => {
    if (window.scrollY + window.innerHeight > document.body.offsetHeight - scrollThreshold) {
      render10Divs();
    }
  });
}

init();

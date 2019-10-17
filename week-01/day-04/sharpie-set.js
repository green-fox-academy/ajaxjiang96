const Sharpie = require('./sharpie');

class SharpieSet {
  constructor() {
    this.sharpies = [];
  }

  countUsable() {
    return this.sharpies.filter((s) => s.usable).length;
  }

  removeTrash() {
    this.sharpies = this.sharpies.filter((s) => s.usable);
  }

  add(newSharpie) {
    this.sharpies.push(newSharpie);
  }
}

const ss = new SharpieSet();
ss.add(new Sharpie());

console.log(`usable sharpies: ${ss.countUsable()}`);

for (let i = 0; i < 100; i += 1) {
  ss.sharpies.forEach((s) => s.use());
}
console.log(ss.sharpies);

console.log(`usable sharpies: ${ss.countUsable()}`);
ss.removeTrash();
console.log(ss.sharpies);

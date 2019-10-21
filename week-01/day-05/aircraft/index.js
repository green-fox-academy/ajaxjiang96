const Carrier = require('./carrier');
const F16 = require('./f16');
const F35 = require('./f35');

const a = new Carrier(2300, 5000);
a.add(new F16());
a.add(new F16());
a.add(new F35());
a.add(new F35());
a.add(new F35());
a.getStatus();
a.fill();
a.getStatus();

const b = new Carrier(2300, 5000);
b.add(new F16());
b.add(new F16());
b.add(new F35());
b.add(new F35());
b.add(new F35());

a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());
a.fight(b);
console.log(a.getStatus());

/* Sharpie

Create Sharpie class
We should know each sharpie's color, width and inkAmount
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount
*/

class Sharpie {
  constructor(color, width) {
    this.inkAmount = 100;
    this.color = color;
    this.width = width;
  }

  use() {
    this.inkAmount -= 1;
  }
}
module.exports = Sharpie;

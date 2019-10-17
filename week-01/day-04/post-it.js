/* eslint-disable no-unused-vars */
class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }
}

const text1 = new PostIt('orange', 'Idea 1', 'blue');
const text2 = new PostIt('pink', 'Awesome', 'black');
const text3 = new PostIt('yellow', 'Superb!', 'green');

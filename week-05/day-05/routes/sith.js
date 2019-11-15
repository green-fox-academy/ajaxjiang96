const RANDOM_SENTENCES = [
  'Err..err.err.',
  'Arrgh.',
  'Uhmm.',
  'LOLOL.',
  'My son.',
  'I am your father!',
  'Your father I am!',
];

const oneOrTwoRandSentences = (pool) => {
  const oneOrTwo = Math.round(Math.random()) + 1;
  const result = [];
  for (let i = 0; i < oneOrTwo; i += 1) {
    const randIndex = Math.floor(Math.random() * pool.length);
    result.push(pool[randIndex]);
  }
  return result;
};

module.exports = {
  sith: (req, res) => {
    const { text } = req.body;
    if (!text) {
      res.send({
        error: 'Feed me some text you have to, padawan young you are. Hmmm.',
      });
      return;
    }
    const sentences = text.split('.').filter((sentence) => sentence);
    let sithText = sentences.map((sentence) => {
      const tokens = sentence.trim(' ').split(' ');
      const newSentence = [];

      for (let i = 0; i < tokens.length; i += 2) {
        if (i + 1 < tokens.length) {
          newSentence.push(tokens[i + 1]);
          newSentence.push(tokens[i].toLowerCase());
        } else {
          newSentence.push(tokens[i].toLowerCase());
        }
      }
      newSentence[0] = newSentence[0].substr(0, 1).toUpperCase() + newSentence[0].substr(1);
      return `${newSentence.join(' ')}.`;
    });

    for (let i = sithText.length; i > 0; i -= 1) {
      sithText.splice(i, 0, ...oneOrTwoRandSentences(RANDOM_SENTENCES));
    }

    sithText = sithText.join(' ');
    res.send({
      sith_text: sithText,
    });
  },
};

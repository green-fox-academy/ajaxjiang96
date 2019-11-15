module.exports = {
  translate: (req, res) => {
    const { lang, text } = req.body;
    if (lang !== 'en') {
      res.send({
        error: 'I can\'t translate that!',
      });
      return;
    }
    let translated = '';
    text.split('').forEach((char) => {
      translated += char;
      if ('aeiou'.indexOf(char) > 0) {
        translated += `l${char}`;
      }
    });
    res.send({
      translated,
      lang: 'gibberish',
    });
  },
};

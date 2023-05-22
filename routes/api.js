'use strict';

const Translator = require('../components/translator.js');
let trans = new Translator();

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body;
      console.log("text");
      console.log(text);
      console.log("locale");
      console.log(locale);   
      if (text == ""){
        console.log("{ error: 'No text to translate' }");
        console.log({ error: 'No text to translate' });
        return res.json({ error: 'No text to translate' });
      } else if (!locale || !text){
        console.log("{ error: 'Required field(s) missing' }");
        console.log({ error: 'Required field(s) missing' });
        return res.json({ error: 'Required field(s) missing' });
      }else if (locale != "american-to-british" && locale != "british-to-american"){
        console.log("{ error: 'Invalid value for locale field' }");
        console.log({ error: 'Invalid value for locale field' });
        return res.json({ error: 'Invalid value for locale field' });
      } else {
        let translation = locale == "american-to-british" ? trans.AtoB(text) : trans.BtoA(text);
        if (translation == text){
          translation = "Everything looks good to me!";
        };
        return res.json({text, translation});
      };
    });
};

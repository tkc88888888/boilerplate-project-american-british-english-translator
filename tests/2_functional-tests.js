const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let trans = new Translator();
///*
suite('Functional Tests', () => {
  suite('Routing tests', () => {
    suite('POST request to /api/translate', () => {
      //Translation with text and locale fields: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "text": "Mangoes are my favorite fruit.", "locale": "american-to-british" }' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"text":"Mangoes are my favorite fruit.","translation":"Mangoes are my <span class=\"highlight\">favourite</span> fruit."}
      test('text and locale fields', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
            text: "Mangoes are my favorite fruit.",
            locale: "american-to-british" 
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.text, "Mangoes are my favorite fruit.");
            assert.equal(res.body.translation, "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
            done();
          });
      });    
      //Translation with text and invalid locale field: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "text": "Mangoes are my favorite fruit.", "locale": "chinese-to-british" }' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"error":"Invalid value for locale field"}
      test('text and invalid locale field', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
            text: "Mangoes are my favorite fruit.",
            locale: "chinese-to-british" 
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Invalid value for locale field");
            done();
          });
      });    
      //Translation with missing text field: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "locale": "british-to-american" }' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"error":"Required field(s) missing"}
      test('missing text field', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
              locale: "british-to-american"
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing");
            done();
          });
      });    
      //Translation with missing locale field: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "text": "Mangoes are my favorite fruit."}' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"error": "Required field(s) missing"}
      test('missing locale field', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
              text: "We watched the footie match for a while."
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "Required field(s) missing");
            done();
          });
      }); 
      //Translation with empty text: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "text": "", "locale": "british-to-american" }' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"error":"No text to translate"}
      test('empty text', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
              text: "",
              locale: "british-to-american"
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.error, "No text to translate");
            done();
          });
      });    
      //Translation with text that needs no translation: POST request to /api/translate
      //curl  -X POST -H 'Content-Type: application/json' -d '{ "text": "Mangoes are my favorite fruit.", "locale": "british-to-american" }' https://american-british-translator.freecodecamp.rocks/api/translate
      //{"text":"Mangoes are my favorite fruit.","translation":"Everything looks good to me!"}
      test('text that needs no translation', function(done) {
        chai
          .request(server)
          .post('/api/translate')
          .set('content-type', 'application/json')
          .send({
            text: "Mangoes are my favorite fruit.",
            locale: "british-to-american"
          })
          .end(function(err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.body.text, "Mangoes are my favorite fruit.");
            assert.equal(res.body.translation, "Everything looks good to me!");
            done();
          });
      });    
    });  
  });
});
//*/
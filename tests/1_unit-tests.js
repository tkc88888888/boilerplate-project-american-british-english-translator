const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let trans = new Translator();

suite('Unit Tests', () => {
  suite('to British English', () => {
    //Translate Mangoes are my favorite fruit. to British English
    test('Mangoes are my favorite fruit.', function(done) {
      assert.equal(trans.AtoB('Mangoes are my favorite fruit.'), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
      done();
    });
  ///*
    //Translate I ate yogurt for breakfast. to British English
    test('I ate yogurt for breakfast.', function(done) {
      assert.equal(trans.AtoB('I ate yogurt for breakfast.'), "I ate <span class=\"highlight\">yoghurt</span> for breakfast.");
      done();
    });
    //Translate We had a party at my friend's condo. to British English
    test("We had a party at my friend's condo.", function(done) {
      assert.equal(trans.AtoB("We had a party at my friend's condo."), "We had a party at my friend's <span class=\"highlight\">flat</span>.");
      done();
    });   
    //Translate Can you toss this in the trashcan for me? to British English
    test("Can you toss this in the trashcan for me?", function(done) {
      assert.equal(trans.AtoB("Can you toss this in the trashcan for me?"), "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
      done();
    });  
    //Translate The parking lot was full. to British English
    test("The parking lot was full.", function(done) {
      assert.equal(trans.AtoB("The parking lot was full."), "The <span class=\"highlight\">car park</span> was full.");
      done();
    });  
    //Translate Like a high tech Rube Goldberg machine. to British English
    test("Like a high tech Rube Goldberg machine.", function(done) {
      assert.equal(trans.AtoB("Like a high tech Rube Goldberg machine."), "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
      done();
    });  
    //Translate To play hooky means to skip class or work. to British English
    test("To play hooky means to skip class or work.", function(done) {
      assert.equal(trans.AtoB("To play hooky means to skip class or work."), "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
      done();
    });  
    //Translate No Mr. Bond, I expect you to die. to British English
    test("No Mr. Bond, I expect you to die.", function(done) {
      assert.equal(trans.AtoB("No Mr. Bond, I expect you to die."), "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
      done();
    });  
    //Translate Dr. Grosh will see you now. to British English
    test("Dr. Grosh will see you now.", function(done) {
      assert.equal(trans.AtoB("Dr. Grosh will see you now."), "<span class=\"highlight\">Dr</span> Grosh will see you now.");
      done();
    });  
    //Translate Lunch is at 12:15 today. to British English
    test("Lunch is at 12:15 today.", function(done) {
      assert.equal(trans.AtoB("Lunch is at 12:15 today."), "Lunch is at <span class=\"highlight\">12.15</span> today.");
      done();
    });  
  });
  suite('to American English', () => {
    //Translate We watched the footie match for a while. to American English
    test("We watched the footie match for a while.", function(done) {
      assert.equal(trans.BtoA("We watched the footie match for a while."), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
      done();
    });  
    //Translate Paracetamol takes up to an hour to work. to American English
    test("Paracetamol takes up to an hour to work.", function(done) {
      assert.equal(trans.BtoA("Paracetamol takes up to an hour to work."), "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.");
      done();
    }); 
    //Translate First, caramelise the onions. to American English
    test("First, caramelise the onions.", function(done) {
      assert.equal(trans.BtoA("First, caramelise the onions."), "First, <span class=\"highlight\">caramelize</span> the onions.");
      done();
    }); 
    //Translate I spent the bank holiday at the funfair. to American English
    test("I spent the bank holiday at the funfair.", function(done) {
      assert.equal(trans.BtoA("I spent the bank holiday at the funfair."), "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.");
      done();
    }); 
    //Translate I had a bicky then went to the chippy. to American English
    test("I had a bicky then went to the chippy.", function(done) {
      assert.equal(trans.BtoA("I had a bicky then went to the chippy."), "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.");
      done();
    }); 
    //Translate I've just got bits and bobs in my bum bag. to American English
    test("I've just got bits and bobs in my bum bag.", function(done) {
      assert.equal(trans.BtoA("I've just got bits and bobs in my bum bag."), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
      done();
    }); 
    //Translate The car boot sale at Boxted Airfield was called off. to American English
    test("The car boot sale at Boxted Airfield was called off.", function(done) {
      assert.equal(trans.BtoA("The car boot sale at Boxted Airfield was called off."), "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.");
      done();
    }); 
    //Translate Have you met Mrs Kalyani? to American English
    test("Have you met Mrs Kalyani?", function(done) {
      assert.equal(trans.BtoA("Have you met Mrs Kalyani?"), "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
      done();
    }); 
    //Translate Prof Joyner of King's College, London. to American English
    test("Prof Joyner of King's College, London.", function(done) {
      assert.equal(trans.BtoA("Prof Joyner of King's College, London."), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
      done();
    }); 
    //Translate Tea time is usually around 4 or 4.30. to American English
    test("Tea time is usually around 4 or 4.30.", function(done) {
      assert.equal(trans.BtoA("Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.");
      done();
    }); 
  });
  suite('Highlight translation', () => {
    
    //Highlight translation in Mangoes are my favorite fruit.
    test("Mangoes are my favorite fruit.", function(done) {
      assert.equal(trans.AtoB("Mangoes are my favorite fruit."), "Mangoes are my "+"<span class=\"highlight\">"+"favourite"+"</span>"+" fruit.");
      done();
    }); 
    //Highlight translation in I ate yogurt for breakfast.
    test("I ate yogurt for breakfast.", function(done) {
      assert.equal(trans.AtoB("I ate yogurt for breakfast."), "I ate "+"<span class=\"highlight\">"+"yoghurt"+"</span>"+" for breakfast.");
      done();
    }); 
    //Highlight translation in We watched the footie match for a while.
    test("We watched the footie match for a while.", function(done) {
      assert.equal(trans.BtoA("We watched the footie match for a while."), "We watched the "+"<span class=\"highlight\">"+"soccer"+"</span>"+" match for a while.");
      done();
    }); 
    //Highlight translation in Paracetamol takes up to an hour to work.
    test("Paracetamol takes up to an hour to work.", function(done) {
      assert.equal(trans.BtoA("Paracetamol takes up to an hour to work."), "<span class=\"highlight\">"+"Tylenol"+"</span>"+" takes up to an hour to work.");
      done();
    }); 
    //*/
  });
});

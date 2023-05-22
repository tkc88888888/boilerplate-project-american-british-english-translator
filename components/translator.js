const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {


  Alist(str){
    let alist = [];
    Object.keys(americanOnly).forEach(key=>{
      let check = new RegExp('\\b'+key+'\\b','gi');
      if(str.match(check)){
        alist.push([check, americanOnly[key]]);
        //console.log(key);
      }
    });
    Object.keys(americanToBritishSpelling).forEach(key=>{
      let check = new RegExp('\\b'+key+'\\b','gi');
      if(str.match(check)){
        alist.push([check, americanToBritishSpelling[key]]);
        //console.log(key);
      }
    });
    Object.keys(americanToBritishTitles).forEach(key=>{
      let check = new RegExp('\\b'+key.replace(/\./g,'\\b\\.'),'gi');
      if(str.match(check)){
        alist.push([check, americanToBritishTitles[key]]);
        //console.log(key);
      }
    });

    //console.log("alist");
    console.log(alist);
    return (alist);
  }


  
  AtoB(str){
    
    let alist = this.Alist(str);
    let atime = /(?:([0-9]|0[0-9]|1[0-9]|2[0-3])):(?:([0-5][0-9]))/g;
    alist.forEach(e=>{
      
      if (americanToBritishTitles[e[1]+'.']){
        str = str.replace(e[0], "<span class=\"highlight\">"+e[1][0].toUpperCase() + e[1].slice(1)+"</span>");
      } else {
        str = str.replace(e[0], "<span class=\"highlight\">"+e[1]+"</span>");
      }
      //let title = new RegExp('\\b'+e[0]+'\\b\\.?','gi')
      //console.log(word);
      //console.log("str.match(word)");
      //console.log(str.match(word));
    });
    str = str[0].toUpperCase() + str.slice(1);
    str = str.replace(atime, "<span class=\"highlight\">"+"$1.$2"+"</span>");
    console.log(str);
    return (str);
  };

   Blist(str){

    let blist = [];
    Object.keys(britishOnly).forEach(key=>{
      let check = new RegExp('\\b'+key+'\\b','gi')
      if(str.match(check)){
        blist.push([check, britishOnly[key]]);
        //console.log(key);
      }
    });
     
    Object.keys(americanToBritishSpelling).forEach(key=>{
      let check = new RegExp('\\b'+americanToBritishSpelling[key]+'\\b','gi')
      if(str.match(check)){
        blist.push([check, key]);
        //console.log(key);
      }
    });
    Object.keys(americanToBritishTitles).forEach(key=>{
      let check = new RegExp('\\b'+americanToBritishTitles[key]+'\\b','gi')
      if(str.match(check)){
        blist.push([check, key]);
        //console.log(key);
      }
    });


    console.log(blist);
    return (blist);
  }

  BtoA(str){

    let blist = this.Blist(str);
    //console.log(blist);
    let btime =/(?:([0-9]|0[0-9]|1[0-9]|2[0-3])).(?:([0-5][0-9]))/g;
    blist.forEach(e=>{

      if (americanToBritishTitles[e[1]]){
        str = str.replace(e[0], "<span class=\"highlight\">"+e[1][0].toUpperCase() + e[1].slice(1)+"</span>");
      } else {
        str = str.replace(e[0], "<span class=\"highlight\">"+e[1]+"</span>");
      }
      
      //console.log(word);
    });
    str = str[0].toUpperCase() + str.slice(1);
    str = str.replace(btime, "<span class=\"highlight\">"+"$1:$2"+"</span>");
    console.log(str);
    return (str);
  };
}

module.exports = Translator;
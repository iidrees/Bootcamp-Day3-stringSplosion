module.exports = class StringSplosion {
    constructor (str) {
        this.str = str;
        }

    manipulate () {
      let wordSplosion = '';
      for (let counter = 1; counter <= this.str.length; counter++){
      	let newSplosion = this.str.slice(0, counter);
        wordSplosion += newSplosion;
  }
     return wordSplosion; 
      
    }
}
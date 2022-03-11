const palindromes = function (word) {

    //loops through word, tests if upper char!=lower char, if false char is letter
    //pushes letter char to newWord array
    let newWord=[];
    for(let i=0;i<word.length;i++){
      tempChar=word[i].toLowerCase()
      if(tempChar!=word[i].toUpperCase()){
        newWord.push(tempChar);
      }
    }

    var len=newWord.length;
    for(let i=0;i<len/2;i++){
      if(newWord[i]!==newWord[len-1-i]){
        return false
      }
    }
    return true


};

let word='racecar'

palindromes(word);




// Do not edit below this line
module.exports = palindromes;

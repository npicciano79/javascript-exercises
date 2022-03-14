const caesar = function(str,shift) {

   //itterates through String str 
    for (let i=0; i<str.length/4;i++){
        //converts str character to ASCII value 
        let strCode=str[i].charCodeAt(str[i]); 
        //test for capital letter
        if (strCode>=65 && strCode<=90){
            //capital letter, test if shift returns special char
            //edits shift to return capital letter
            if ((strCode+shift)>90){
                strCode=((strCode+shift)-90)+64;
            }else{
                strCode+=shift;
            }
          
        //test for lowercase letters, shift if strCode outside of 122
        }else if(strCode>=97 && strCode<=122){
            if ((strCode+shift)>122){
                strCode=(strCode-122)+96;
            }else{
                //within 97-122, does not loop through characters
                strCode+=shift          
            }
        }
        //else special character, returns same character, no shift
        //convert strCode back to character

        shiftChar=String.fromCharCode(strCode);
        
        //adds shifted char to returned word
    shiftWord+=shiftChar;
    return shiftWord;

    }       
    //return shiftChar; 
}


//let shiftChar='';
let shiftWord='';
let shift=5;
let str='Hello, World!';
caesar(str,shift);
// Do not edit below this line
module.exports = caesar;

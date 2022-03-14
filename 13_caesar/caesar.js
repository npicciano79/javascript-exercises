const caesar = function(str,shift){
    //computes shift factor if >26
    if (shift>26){
        shift=shift%26;
    } 
    //itterates through String str 
     for (let i=0; i<str.length;i++){
         //converts str character to ASCII value 
         let strCode=str[i].charCodeAt(str[i]); 
         //console.log(strCode);
         //test for capital letter
         if (strCode>=65 && strCode<=90){
             //capital letter, test if shift returns special char
             //edits shift to return capital letter
             if ((strCode+shift)>90){
                 strCode=((strCode+shift)-90)+64;
             //negative shift
             }else if ((strCode+shift)<65){
                 strCode=(91+(shift+strCode-65))
             }
             //shift between 65 and 90
             else{
                 strCode+=shift;
         }
         //test for lowercase letters, shift if strCode outside of 122
         }else if(strCode>=97 && strCode<=122){
             //shift greater than 122, return to beginning of alpha 
             if ((strCode+shift)>122){
                 strCode=(strCode+shift-122)+96;
             //negative shift
             }else if ((strCode+shift)<97){
                 strCode=(123+(shift+strCode-97));
             }
             //shift between 97 and 122
             else{
                 strCode+=shift;
             }
         }
         //no shift for special characters
         //convert strCode back to character
         shiftChar=String.fromCharCode(strCode);
         tempWord.push(shiftChar);
         } 

    return tempWord.join();  
    }
    


let tempWord=[];
let shiftWord='';
let shift=1;
let str='Aaa';
caesar(str,shift);
// Do not edit below this line
module.exports = caesar;

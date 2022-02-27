const repeatString = function(str,times) {
    
    let fullString=''
    rs:if (str==""){
        break rs;
    }else if (times<0){
        fullString="ERROR";
        break rs;
    }else{
        for(let i=0;i<times;i++){
            fullString+=str;
        }
             
    }return fullString;
}
    

let repeatedString='hey';
let numberRepeat=3;


repeatString(repeatedString,numberRepeat);

// Do not edit below this line
module.exports = repeatString;

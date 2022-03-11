const fibonacci = function(number) {
    let prevVal=0;
    let currVal=1;
    let count=1;
    if (number<0){
        return 'OOPS'
    }
    while(count<number){
        let tempVal=currVal;
        currVal=currVal+prevVal;
        prevVal=tempVal;
        count+=1
    }
    return currVal;

};

fibonacci(8);

// Do not edit below this line
module.exports = fibonacci;

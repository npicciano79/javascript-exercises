const sumAll = function(first,second) {
    let valSum=0;
    if (typeof first!='number' || typeof second!='number'){
        return 'ERROR';
    }else if(first <=0 || second <=0){
        return 'ERROR'
    }else if(second<first){    //switch values
        let temp=first;
        first=second;
        second=temp
    }
    for (let i=first;i<=second;i++){
        valSum+=i
    }
    return valSum;


}
//arr=[1,4]

sumAll(10,[90,1]);

// Do not edit below this line
module.exports = sumAll;

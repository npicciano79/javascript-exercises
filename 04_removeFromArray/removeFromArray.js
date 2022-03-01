const removeFromArray = function(arr,...val) {

    let newArr=arr.filter(a => !val.includes(a));
    return newArr;

    }



let arr=['hey', 2, 3, 'ho'];
//let val=[3,2];
removeFromArray(arr,'1',3);



// Do not edit below this line
module.exports = removeFromArray;

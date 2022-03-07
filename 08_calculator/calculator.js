const add = function(...vals) {
  return vals.reduce((first,second) => {
    return first+second;
  })
	
};

const subtract = function(a,b) {
  return a-b;
	
};

const sum = function(nums) {
  let numSum=0;
  for (let i=0;i<nums.length;i++){
    numSum=numSum+nums[i];
  }
  return Number(numSum);
	
};

const multiply = function(num) {
  let prod=0;
  for(let i=0;i<num.length;i++){
    prod*=num[i]
  }
  return Number(prod);

};

const power = function(a,b) {

  //itterative solution
  //return Math.pow(a,b);
  //let power=1;
  //for(let i=1;i<=b;i++){
    //power*=a; }
  //return power;

  //recursive solution
  //if (b==0){
    //return 1;
  //}else{
    //return a*power(a,b-1);
  //}


  //second recursive solution
  if (b!=0){
    return a*power(a,b-1);
  }else{
    return 1;
  }

};

const factorial = function(value) {
  //recursive solution, runtime .43s
  if (value==0){
    return 1;
  }else{
    return value*factorial(value-1);


  }


  //itterative solution, runtime .44s
  //let tempVal=value-1;
  //if (value==0){
    //return 1;
  //}else{
    //while(tempVal>0){
      //value=tempVal*value;
      //tempVal-=1
    //} 
    //return value;  
  //}
};



factorial(0);


//subtraction function call
//num=[1,3,5,7,9];
//power(5,3);
//factorial(5);

//add function call
//let vals=[[0,0],[2,2],2,6];
//for (let i=0; i<vals.length;i++){
  //add(vals[i]);}





// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

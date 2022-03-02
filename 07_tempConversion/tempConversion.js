const ftoc = function(faren) {
  var cel=(((faren-32)/9)*5);
  cel= Number(cel.toFixed(1))

  return cel;

};

const ctof = function(cel) {
  var faren=((9*cel)/5)+32;
  
  return Number(faren.toFixed(1));


};

ctof(-10);



// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

const getTheTitles = function(books,field){ 
  //loop through array of objects,, returns array of titles + additional array, fix
  let answer=[]
  for (let i=0;i<books.length;i++){
    answer.push(books[i][field]);
    
  }
  return answer;






  //using map function
  //let result = books.map(a => a.title);
  
  //return result;
  
}
  


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

let field='title';
getTheTitles(books,field);
// Do not edit below this line
module.exports = getTheTitles;

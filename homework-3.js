function exaple (a) {
    return function (b){
    return (a+b)
  }
    }
  
  let add = exaple (6)
  let result = add (7)
  
  console.log (result)
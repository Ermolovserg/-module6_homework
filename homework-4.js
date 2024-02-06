function addNumbers(x, y) {
    let start = x;
  
    function fooNumber() {
      console.log(start);
      start = start + 1;
  
      if (start > 15) {
        clearInterval(intervalId);
      }
    }
  
    fooNumber();
  
    let intervalId = setInterval(fooNumber, 1000);
  }
  
  addNumbers(5, 15);
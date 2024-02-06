function addNumber(number) {
    if (number <= 1 || number > 1000 || !Number.isInteger(number)) {
      console.log("Данные неверны");
      return;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        console.log(`${number} - не простое число`);
        return;
      }
    }
  
    console.log(`${number} - простое число`);
  }

  addNumber(2); 
  addNumber(156); 
  addNumber(257);
  addNumber(1000); 
  addNumber(1001); 
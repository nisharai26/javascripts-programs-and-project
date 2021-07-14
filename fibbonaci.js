const fibonacci = num => {
    console.log(num)
    if(num < 2) {
      return num
    }
    // recursion here
    return fibonacci(num - 1) + fibonacci(num - 2)
  }

  console.log(fibonacci(5))
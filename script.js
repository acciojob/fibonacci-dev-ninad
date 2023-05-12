function fibonacci(num) {
// your code here
	var fib = [];
  fib[0] = 0;
  fib[1] = 1;
  for (var i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
}

module.exports = fibonacci;

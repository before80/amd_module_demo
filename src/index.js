console.log("1")

require(['./math/index'], function(math) {
    console.log('Addition:', math.add(1, 2)); // 输出: Addition: 3
    console.log('Subtraction:', math.subtract(5, 3)); // 输出: Subtraction: 2
    console.log('Multiplication:', math.multiply(4, 5)); // 输出: Multiplication: 20
    console.log('Division:', math.divide(10, 2)); // 输出: Division: 5
});

console.log("2")
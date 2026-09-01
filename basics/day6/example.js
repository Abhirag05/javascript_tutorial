function createDiscount(discount) {
    return function (price) {
        return price - price * discount;
    };
}

const studentDiscount = createDiscount(0.20);
const regularDiscount = createDiscount(0.10);

console.log(studentDiscount(100)); // 80
console.log(regularDiscount(100)); // 90


//real life example of how the closure works in a real life scenario
//here  the outer function is createDiscount and the inner function is the returned function that calculates the discounted price. The inner function has access to the discount variable from the outer function's scope, even after the outer function has finished executing. This allows us to create different discount functions (like studentDiscount and regularDiscount) that remember their respective discount values.
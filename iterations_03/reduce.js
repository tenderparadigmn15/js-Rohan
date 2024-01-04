const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//    console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0)
console.log(myTotal);

const shoppingCart =[
    {
        itemName: "js course",
        price: 199
    },
    {
        itemName: "java",
        price: 299
    },
    {
        itemName: "Data Science",
        price: 499
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price, 0)

console.log(priceToPay);
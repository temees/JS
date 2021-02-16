//let n = 100;
//let i = 0;
//nextPrime:
//while (i < n) {
//    i++;
//    for (let j = 2; j < i; j++) {
//        if (i % j == 0) continue nextPrime; 
//    } 
//console.log(i);
//}

//for (let i = 0; i < 10; console.log(i), ++i) {
//    
//};

const arr = [
    {name:'product1', number:1},
    {name:'product2', number:2},
    {name:'product3', number:3},
    {name:'product4', number:1}
    
]
let y = arr.reduce(function (acc, elem) {
    return {count: acc.count+1, sum: acc.sum + elem.number}
    
}, {count: 0, sum: 0});
console.log(y)

//let arr = [50, 48, 60, 30];
//let y = arr.reduce(function countBascetPrice(sum, elem) {
//    return sum + elem
//}, 0);
//console.log(y)


//let arr = [];
//for (let k = 1; k < 20; k++) {
//    arr.push('x');
//
//    console.log(arr.join(''));
//}

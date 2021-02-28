function obj(num) {
    let str = num + '';
    let arrNum = str.split('');
    while (arrNum.length < 3) {
        arrNum.unshift(0);
    }
    let objNum = {};
    if (num > 999 || num < 0) {
        console.log("Введите число в диапазоне от 0 до 999");
        return {};
    } else {
        objNum['сотни'] = arrNum[0] * 1;
        objNum['десятки'] = arrNum[1] * 1;
        objNum['еденицы'] = arrNum[2] * 1;
        return objNum;
    }
}
console.log(obj(9));



const arr = [
    {
        name: 'product1',
        number: 1
    },
    {
        name: 'product2',
        number: 2
    },
    {
        name: 'product3',
        number: 3
    },
    {
        name: 'product4',
        number: 1
    }

]
let y = arr.reduce(function (acc, elem) {
    return {
        count: acc.count + 1,
        sum: acc.sum + elem.number
    }

}, {
    count: 0,
    sum: 0
});
console.log(y)

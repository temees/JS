//var a = -2;
//var b = 5;
//if (a >= 0 & b >= 0) console.log(a - b);
//else if (a < 0 & b < 0) console.log(a * b);
//else if (a >= 0 & b < 0) console.log(a + b);
//else if (a < 0 & b >= 0) console.log(a + b);
//
//
//var a = 7;
//switch (a) {
//    case 0:
//        console.log(0);
//    case 1:
//        console.log(1);
//    case 2:
//        console.log(2);
//    case 3:
//        console.log(3);
//    case 4:
//        console.log(4);
//    case 5:
//        console.log(5);
//    case 6:
//        console.log(6);
//    case 7:
//        console.log(7);
//    case 8:
//        console.log(8);
//    case 9:
//        console.log(9);
//    case 10:
//        console.log(10);
//    case 11:
//        console.log(11);
//    case 12:
//        console.log(12);
//    case 13:
//        console.log(13);
//    case 14:
//        console.log(14);
//    case 15:
//        console.log(15);
//}
//
//var a = 4;
//var b = 2;
//
//function sum(a, b) {
//    return (a + b);
//}
//var c = sum(a, b);
//console.log(c);
//
//function raz(a, b) {
//    return (a - b);
//}
//var d = raz(a, b);
//console.log(d);
//
//function proizv(a, b) {
//    return (a * b);
//}
//var e = proizv(a, b);
//console.log(e);
//
//function del(a, b) {
//    return (a / b);
//}
//var f = del(a, b);
//console.log(f);
//
//
//
//
//function mathOperation(arg1, arg2, operation) {
//    switch (operation) {
//        case "sum":
//            return (arg1 + arg2);
//        case "raz":
//            return (arg1 - arg2);
//        case "proizv":
//            return (arg1 * arg2);
//        case "del":
//            return (arg1 / arg2);
//    }
//}
//console.log(mathOperation(2, 3, "proizv"));

function power(val, pow) {
            if (pow == 1) {
                return val;
            }
            else if (pow < 5) {
                return val * power(val, pow-1);
                
            }

}
console.log(power(2, 3))

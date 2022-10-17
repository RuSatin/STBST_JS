/*Вычислить расстояние между двумя точками с учетом имеющихся координат*/
let x1 = 42;
let x2 = 13;

let y1 = -3;
let y2 = 2;

let cathetus1 = Math.abs(x1 - x2);
let cathetus2 = Math.abs(y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
));

/*Сравнить два дробных числа с определенной точностью*/

let first = 0.1 + 0.2 + 0.333;
let second = 0.33334;
let precision = 3;

let firstNormalized = Math.round(
    second * Math.pow(10, precision)
);
let secondNormalized = Math.round(
    second * Math.pow(10, precision)
);

console.log("Исходные числа равны:", first === second);
console.log("Числа равны", firstNormalized === secondNormalized);
console.log("Первое число больше", firstNormalized > secondNormalized);
console.log("Первое чисор меньше", firstNormalized < secondNormalized);

/*Генератор случайных чисел от b до b*/
let a = -100;
let b = 300;

let range = Math.abs(b - a);
let numInRange = Math.round(Math.random() * range);
let min = Math.min(a, b);

console.log(min + numInRange);

/*Вывод отдельно целой и дробной части числа с точностью n*/

let prec = 3;
let num = 0x12f + 0.3 + 0.1;

console.log("Исходное число:", num);
console.log("Целая часть:", Math.floor(num));
console.log("Дробная часть", Math.round(num % 1 * Math.pow(10, prec)));
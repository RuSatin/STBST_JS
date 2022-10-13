/*
1. Подсчет кол-ва квартир в доме с учетом имеющихся параметров
*/

//кол-во подъездов:
let entrances = 6;
//кол-во этажей в доме:
let floors = 40;
//кол-во квартир на этаже:
let flatsPerFloor = 6;

//Умножаем кол-во квартир на этаже, на кол-во этажей и выясняем кол-во квартир в подъезде
let flatsPerEntrance = flatsPerFloor * floors;
console.log("Кол-во квартир в одном подъезде:", flatsPerEntrance);
//Определяем кол-во квартир в доме поделив кол-во квартир в подъезде на кол-во подъездов
let flatsPerBuilding = flatsPerEntrance * entrances;
console.log("Кол-во квартир во всем доме:", flatsPerBuilding);

/*
2. Выявляем пропорции для приготовления коктейля с учетом имеющихся ингредиентов
*/
let vodka = 50;
let tomatoJuice = 120;
let lemonJuice = 10;
let tabasco = 1;
let worcester = 1;

//Желаемый объем напитка:
let volume = 500;

//Получаем объем для коэффициента
let k = (vodka + tomatoJuice + lemonJuice + tabasco + worcester) / volume;

console.log("Объем водки, необходимый для приготовления коктейля:", vodka * k);

/*
3. Вычисляем дискриминант по формуле: a * x * x + b * x + c = 0 с учетом имеющихся параметров
*/
let a = 3;
let b = 5;
let c = 10;

let d = b * b - 4 * a * c;

//Вычисляем корень дискриминанта
let dRoot = Math.sqrt(d); //подключили методы для математического вычисления
console.log("X1 =", (-b + dRoot) / (2 * a));
console.log("X2 =", (-b - dRoot) / (2 * a));

/*
4. Вычисляем n чисел ряда Фибоначчи, где каждое следующее число - сумма двух предыдущих*/

let n = 10;

let current = 0;
let prev = 1;
let prevPrev = 0;

console.log("Вычисляем n чисел:");
while (n-- > 0) { //используем цикл
  prevPrev = prev;
  prev = current;
  current += prevPrev;
  console.log("\t\t", current);
}

//ПЕРВЫЙ ВАРИАНТ
var t0 = performance.now(); //Создаём переменную, в неё кладём текущую дату
function reverseArray(arr) { //Выполняем функцию
  let x = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    x.push(arr[i]);
	
  }
    return x;
}
console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var t1 = performance.now(); //Создаём другую переменную и тоже кладём текущую дату
var result=t1-t0; //Считаем разницу двух дат
console.log(result);//выводим её в консоль --> 0.09999999929277692


//ВТОРОЙ ВАРИАНТ

var t0 = performance.now(); //Создаём переменную, в неё кладём текущую дату
function reverseArrayInPlace (arr) {
    for(let i=0, n=0; i < arr.length/2; i++) {
        n=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=n;
    }
    return arr;
}
var arrayValue = ["A", "B", "C", "E"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → ["E", "C", "B", "A"];

var t1 = performance.now(); //Создаём другую переменную и тоже кладём текущую дату
var result=t1-t0; //Считаем разницу двух дат
console.log(result);//выводим её в консоль --> 0.6999999986874172



//ВЫВОД:
//разница между двумя измеренными значениями описывает, сколько прошло времени.
//0.09999999929277692 < 0.6999999986874172
//Первый вариант функции выполняется практически в 7 раз быстрее (пусть и милисекунды незаметны глазу)
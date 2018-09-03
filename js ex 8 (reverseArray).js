/*Обращаем вспять массив
У массивов есть метод reverse, 
меняющий порядок элементов в массиве на обратный. 
В качестве упражнения напишите две функции, 
reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив, 
с обратным порядком элементов. Вторая работает как оригинальный метод 
reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. */

function reverseArray(arr) {
  let x = [];
  for (let i = arr.length - 1; i >= 0; i--) { //вводим счетчик
    x.push(arr[i]); //добавляем значение в массив
  }
  return x;
}

function reverseArrayInPlace (arr) {
    for(let i=0, n=0; i < arr.length/2; i++) {
        n=arr[i]; //добавляем i тый элемент
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=n;
    }
    return arr;
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]
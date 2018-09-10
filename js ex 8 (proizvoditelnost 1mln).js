//ПЕРВЫЙ ВАРИАНТ

let t0 = performance.now(); //Создаём переменную, в неё кладём текущую дату
function reverseArray(arr) { //Выполняем функцию
    let x = [];
	let arr=[];
    arr.length=1000000;
  for (let i = arr.length-1; i >= 0; i--) {
    x.push(arr[i]);
	
  }
    return x;
}
time = performance.now() - t0; //находим разницу времени
console.log('Время выполнения ' + time + ' миллисекунд');

//ВТОРОЙ ВАРИАНТ
let t0 = performance.now(); //Создаём переменную, в неё кладём текущую дату
function reverseArrayInPlace (arr) {
	let arr=[];
    arr.length=1000000;
    for(let i=0, n=0; i < arr.length/2; i++) {
        n=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=n;
    }
    return arr;
}

time = performance.now() - t0; //находим разницу времени
console.log('Время выполнения ' + time + ' миллисекунд');
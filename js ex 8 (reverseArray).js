/*Обращаем вспять массив
У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный. 
В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace. 
Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов. 
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве, 
который был ей передан в качестве аргумента. */

function reverseArray(arr) {
  let x = [];
  for (let i = arr.length - 1; i >= 0; i--) { //вводим счетчик
    x.push(arr[i]); //добавляем значение в массив
  }
  return x;
}

//комментарий:
/*х - это массив
Например, x=[1, 2, 3, 4, 5]
             0  1  2  3  4  
Шаг 1.
i = arr.length - 1=5-1=4; 4>=0; i=4-1=3
x.push(arr[i]) --> x.push(arr[4]) --> в конец массива x добавляется arr[4]= "5"

Шаг 2.
i = 3; 3>=0; i=3-1=2
x.push(arr[i]) --> x.push(arr[3]) --> в конец массива x добавляется arr[3]= "4"

Шаг 3.
i = 2; 2>=0; i=2-1=1
x.push(arr[i]) --> x.push(arr[2]) --> в конец массива x добавляется arr[2]= "3"

Шаг 4.
i = 1; 1>=0; i=1-1=0
x.push(arr[i]) --> x.push(arr[1]) --> в конец массива x добавляется arr[1]= "2"

Шаг 5.
i = 0; 0>=0; i=0-1=-1
x.push(arr[i]) --> x.push(arr[0]) --> в конец массива x добавляется arr[0]= "1"

Шаг 6.
i = -1; -1>=0; условие не выполняется, выводим масив x: [5, 4, 3, 2, 1]
*/

/*ДЛЯ ОСОЗНАНИЯ
Когда у нас на выходе из функции новая переменная, 
мы получаем намного более строгий контроль над состоянием приложения, 
и убираем любые возможные паразитные сайд-эффекты: гарантируем, 
что данные в отдельно взятой переменной никак не затрутся в процессе выполнения методов, 
поэтому можем использовать её в любой части кода. Первая функция у тебя чистая Ты передаёшь не массив, 
а ссылку на ячейку памяти*/


function reverseArrayInPlace (arr) {
    for(let i=0, n=0; i < arr.length/2; i++) {
        n=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i]=n;
    }
    return arr;
}
// комментарии:
/*В данном примере при реверсе массива первый элемент становится последним, а последний первым; 
второй - предпоследним, а предпоследний - вторым... и тд. Таких пар перестановок надо сделать в два раза меньше,
чем длина массива (т.е. переставлять элементы до тех пор, пока меняющиеся элементы не встретятся в центре).
Если в массиве нечетное количество элементов, то в середине массива находится элемент, у которого нет пары и его обменивать не нужно.
Если в массиве четное количество элементов, то в середине находится пара, которая также должна обменяться. 
Количество обменов будет равно количеству элементов массива нацело деленному на 2.
Реверс массива происходит в цикле, количество проходов которого равно не более половины от количества элементов. 
В теле цикла происходит обмен элементов. Если индексация (i) массива начинается с 1, а количество элементов N, 
то индекс элемента, с которым должен происходить обмен будет находиться по формуле N-i+1. 
Если же индексация идет с 0, то противоположный для i элемент находится как N-i-1.

Пример ["A", "B", "C", "Е"]
         0    1    2    3
Шаг 1.
счетчик элементов i=0 
переменная n для осуществления замены (обмен двух значений через 3е. n=0
i < arr.length/2 --> 0<2 --> i=1
При этом выполняется:
 n=arr[i]; --> n="A"
 arr[i] = arr[arr.length-1-i]; --> "A"=arr[4-1-0]=arr[3]="E" т.е. заменили крайний левый на крайний правый элемент
 arr[arr.length-1-i]=n; --> arr[3]=n --> "E"="A" т.е. заменили крайний правый элемент на крайний левый
 На шаге 1 получаем массив ["E", "B", "C", "A"]
 
Шаг 2.
счетчик элементов i=1
i < arr.length/2 --> 1<2 --> i=2
При этом выполняется:
 n=arr[i]=arr[1]="B"
 arr[i] = arr[arr.length-1-i]; --> "B"=arr[4-1-1]=arr[2]="C"
 arr[arr.length-1-i]=n; --> arr[2]=n --> "C"="B"
 На шаге 2 получаем массив ["E", "C", "B", "A"]
 
 Шаг 3.
счетчик элементов i=2
i < arr.length/2 --> 2<2 неверно
выводим массив ["E", "C", "B", "A"] */

/*ДЛЯ ОСОЗНАНИЯ
Во второй функции ты обращаешься к исходному массиву
во втором варианте я переписываю исходник. 
в первом у нас как бы параллельно есть исходник+создается новый массив через доп кусочек памяти*/



console.log(reverseArray([1, 2, 3, 4, 5])); // → [5, 4, 3, 2, 1]

var arrayValue = ["A", "B", "C", "E"];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → ["E", "C", "B", "A"];

/*размышления на тему полезности и эффективности
Без поллитра разобраться в чистых и побочных функциях. Как поняла, чистых очень мало по своей сути.
Могу лишь порассуждать: первый вариант мне не по душе тем, что итогом создания функции является новый массив.
это лишнее телодвижение что ли...

Во втором варианте мы меняем порядок элементов на обратный в этом же массиве. И это легче что ли, понятнее.
Если использовать как компонент в других задачак, нет отвлечения на то, что создается дополнительная сторонняя
переменная ("х" в нашем случае).
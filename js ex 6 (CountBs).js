function countBs(row) {

let result = 0; //вводим переменую, обнуляем
   for (let i = 0; i < row.length; i ++) //вводим счетчик длины строки
    {if (row.charAt(i) == "B") //проверяем i-тый элемент строки на Бэтость ("B" англ большая)
        {result++;} //если Бэшка нашлась, в результат кладем 1
    }
return result; // иначе выводим то, что лежит в result
                      }
console.log(countBs("BBBBBBBBBBBBBBBBBBBBBBBBunny")); //24
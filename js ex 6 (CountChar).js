function countChar(row, k) 
{let result = 0; //вводим переменую, обнуляем
   for (let i = 0; i < row.length; i ++) //вводим счетчик длины строки
    {if (row.charAt(i) == k) //проверяем i-тый элемент строки
        {result++;} //если элемент нашелся, в результат добавляем 1
    }
return result;} // иначе выводим то, что лежит в result

console.log(countChar("kakkkkkerlak", "k")); // → 7
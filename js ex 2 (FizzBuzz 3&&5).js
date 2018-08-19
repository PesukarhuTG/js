for (var number = 1; number < 101; number++) 
{var line = ""; //вводим строку
  if (number % 3 == 0) line=line+"fizz"; //если кратно 3, к строке прибавляется fizz
  if (number % 5 == 0) line=line+"buzz"; //если кратно 5, к строке прибавляется buzz
console.log(line || number);} //в итоге выводим (значение строки line, попавшее под условия) ИЛИ (число)
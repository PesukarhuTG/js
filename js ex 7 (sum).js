/*Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму. 
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.*/

function range(start, end, step = 1) {
    let arr = [];

      if (step > 0) {
        for (let i = start; i <= end; i+=step)
        {arr.push(i); }
    }
    else   {
        for (let i = start; i >= end; i+=step)
            {arr.push(i);}
    }
    return arr;
}

function sum(arr)
{
    let sum = 0;
    return arr.reduce(function (sum, current) {
        return sum + current;
    });
}

console.log(sum(range(1, 10))); //-->55
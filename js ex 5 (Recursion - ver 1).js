/*не очень поняла, зачем здесь условие рекурсии, если и так работает... Это начальный вариант */
function isEven(N)
 {if (N%2==0) return true;
    else return false;}

console.log(isEven(50)); // -->true
console.log(isEven(75)); // -->false
console.log(isEven(-1)); // -->false
console.log(isEven(0)); // -->true
console.log(isEven(1)); // -->false
 
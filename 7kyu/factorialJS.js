// ❓В математике факториал неотрицательного целого числа n, обозначаемый n!, является произведением всех положительных целых чисел, меньших или равных n. Например: 5! = 5 * 4 * 3 * 2 * 1 = 120. По соглашению значение 0! равно 1.

// Напишите функцию для вычисления факториала для заданного ввода. Если ввод меньше 0 или больше 12, выдайте исключение типа ArgumentOutOfRangeException(C#) или IllegalArgumentException(Java) или RangeException(PHP) или выдайте RangeError(JavaScript) или ValueError(Python) или верните -1(C).

// ✅ SOLUTION:

function factorial(n){
  if(n < 0 || n > 12){
    throw new RangeError
  }else{
    return (n >= 1) ? n * factorial(n - 1) : 1;
  }

}
console.log(factorial(13));
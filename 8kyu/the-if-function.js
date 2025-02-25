// ❓
// Создайте функцию с именем , _ifкоторая принимает 3 аргумента: значение boolи 2 функции (которые не принимают никаких параметров): func1иfunc2

// Когда boolэто правда, func1следует вызвать , в противном случае вызовите func2.

// Пример:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// // Logs 'True' to the console.

// ✅ SOLUTION:

function _if(bool, func1, func2) {
  if(bool){
    return func1()
  }
  return func2()
  }



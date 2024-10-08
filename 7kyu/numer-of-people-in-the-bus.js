// ❓ По городу ходит автобус, который забирает и высаживает людей на каждой остановке.

// Вам предоставляется список (или массив) пар целых чисел. Элементы каждой пары представляют количество людей, которые заходят в автобус (первый элемент), и количество людей, которые выходят из автобуса (второй элемент) на автобусной остановке.

// Ваша задача — вернуть количество людей, которые все еще находятся в автобусе после последней остановки (после последнего массива). Несмотря на то, что это последняя остановка, автобус может быть не пустым, и некоторые люди могут все еще находиться внутри автобуса, они, вероятно, спят там :D

// Взгляните на тестовые случаи.

// Пожалуйста, помните, что тестовые случаи гарантируют, что количество людей в автобусе всегда >= 0. Поэтому возвращаемое целое число не может быть отрицательным.

// Второе значение в первой паре массива равно 0, поскольку на первой остановке автобус пуст.


// ✅ SOLUTION:
var number = function(busStops){
    let result = 0;
   for (let i = 0; i < busStops.length; i++) {
    const [vhod, vixod] = busStops[i];
    result += vhod
    result -= vixod
    }
    return result
   }
  


  console.log(number([[10,0],[3,5],[5,8]]))

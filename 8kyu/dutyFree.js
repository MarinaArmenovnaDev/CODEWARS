// ❓ Цель этого ката — подсчитать, сколько бутылок виски из беспошлинной торговли вам придется купить, чтобы экономия по сравнению с обычной ценой в магазинах фактически покрыла расходы на ваш отпуск.

// Вам будет указана розничная цена (normPrice, в фунтах стерлингов (£)), скидка беспошлинной торговли (discount, в процентах) и стоимость тура (в фунтах стерлингов).

// Например, если бутылка обычно стоит 10 фунтов стерлингов, а скидка беспошлинной торговли составляет 10%, вы сэкономите 1 фунт стерлингов за бутылку. Если ваш отпуск обойдется в 500 фунтов стерлингов, вам придется купить 500 бутылок, чтобы сэкономить 500 фунтов стерлингов, поэтому ответ, который вы вернете, должен быть 500.

// Другой пример: если бутылка обычно стоит £12, а скидка беспошлинной торговли составляет 50%, вы сэкономите £6 за бутылку. Если ваш отпуск обойдется в £1000, вам придется купить 166,66 бутылок, чтобы сэкономить £1000, поэтому ваш ответ должен быть 166 бутылок.

// Все входные данные будут целыми числами. Верните целое число. Округлите в меньшую сторону.



// ✅ SOLUTION:
function dutyFree(normPrice, discount, hol){
const newPrice = normPrice * (discount/100)
return Math.floor(hol / newPrice) 
}
console.log(dutyFree(12,50,1000));
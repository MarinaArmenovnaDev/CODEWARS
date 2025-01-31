// ❓ Создайте функцию, которая конвертирует доллары США (USD) в китайские юани (CNY). Входные данные — это сумма в
//  долларах США в виде целого числа, а выходные данные должны быть строкой, которая указывает сумму в юанях,
//  за которой следует «китайские юани».

// Примеры (Вход -> Выход)
// 15  -> '101.25 Chinese Yuan'
// 465 -> '3138.75 Chinese Yuan'
// Курс обмена, который вы должны использовать, составляет 6,75 CNY за 1 USD. Все числа должны быть
// представлены в виде строки с 2 десятичными знаками. (например, "21.00", а НЕ "21.0" или "21")

// ✅ SOLUTION:
function usdcny(usd) {
  let res = usd * 6.75;
  return `${res.toFixed(2)} Chinese Yuan`
}
console.log(usdcny(2));

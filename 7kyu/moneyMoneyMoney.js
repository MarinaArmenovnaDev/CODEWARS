// ❓ У мистера Скруджа есть сумма денег 'P', которую он хочет инвестировать. Прежде чем он это сделает, он хочет узнать, сколько лет 'Y' эта сумма 'P' должна храниться в банке, чтобы она составила желаемую сумму денег 'D'.

// Сумма хранится в банке в течение 'Y' лет, по ней ежегодно выплачиваются проценты 'I'. После уплаты налогов 'T' за год новая сумма реинвестируется.

// Примечание по налогообложению: налогом облагается не инвестированный капитал, а только накопленные за год проценты.

// Пример:

//   Let P be the Principal = 1000.00      
//   Let I be the Interest Rate = 0.05      
//   Let T be the Tax Rate = 0.18      
//   Let D be the Desired Sum = 1100.00


// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30
// Таким образом, мистеру Скруджу придется ждать 3 года, пока первоначальный капитал не достигнет желаемой суммы.

// Ваша задача — завершить предложенный метод и вернуть количество лет «Y» в целом, чтобы мистер Скрудж получил желаемую сумму.

// Предположение: Предположим, что Желаемый основной капитал 'D' всегда больше первоначального основного капитала. Однако лучше всего принять во внимание, что если Желаемый основной капитал 'D' равен основному капиталу 'P', это должно вернуть 0 лет.


//principal - сумма начальная для инвестиций
// interest - проценты в год
// desired - желаемая сумма
// tax - налоги


// ✅ SOLUTION:
function calculateYears(principal, interest, tax, desired) {
let year = 0
let summaZaGod = principal
while (summaZaGod < desired) {
    let godovoiProzent = summaZaGod * interest
    let godovoiNalog =  godovoiProzent *  tax
    let chistiiProsent = godovoiProzent - godovoiNalog
    summaZaGod += chistiiProsent
    year ++

}
return year
}

console.log(calculateYears(1000.00, 0.05, 0.18, 1100.00));
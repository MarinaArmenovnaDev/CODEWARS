// ❓Вы направляетесь на рынок, когда слышите прекрасную музыку, доносящуюся от уличного артиста неподалеку. Ноты складываются так, что вы не поверите, когда музыкант складывает образцы мелодий. Пока вы размышляете, какой алгоритм можно использовать для сдвига октав на 8 тонов или что-то в этом роде, до вас доходит, что вы наблюдаете за музыкантом уже около 10 минут. Вы спрашиваете: «Сколько люди обычно оставляют чаевых за что-то подобное?» Артист поднимает взгляд. «Всегда будет что-то вроде трэш-фидди».

// И тут вы понимаете, что музыкантом был 400-футовый зверь из эпохи палеолита! Лох-несское чудовище почти обмануло вас!

// Есть только 2 гарантированных способа узнать, разговариваете ли вы с Лох-несским чудовищем: A) это чудовище высотой 400 футов из эпохи палеолита; B) оно попросит вас выпить три-фидди.

// Поскольку Несси — мастер маскировки, единственный способ точно определить — поискать фразу "tree fiddy". Поскольку вам надоело, что вас обманывает это чудовище, пришло время закодировать решение для поиска Лох-Несского чудовища. Обратите внимание, что фразу также можно записать как "3.50"или "three fifty". Ваша функция должна возвращать true, если вы общаетесь с Лох-Несским чудовищем, в противном случае — false.

// ✅ SOLUTION:

function isLochNessMonster(s) {
  if(s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")){
    return true
  }
  return false
  }

  console.log(isLochNessMonster("n e three fifty mo zihbfuamcf heua three fifty"));
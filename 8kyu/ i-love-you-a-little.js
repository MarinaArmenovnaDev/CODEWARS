// ❓ Кто помнит то время на школьном дворе, когда девочки брали цветок и отрывали его лепестки, произнося каждую из следующих фраз каждый раз, когда отрывался лепесток:

// "Я тебя люблю"
// "немного"
// "много"
// "страстно"
// "безумно"
// "нисколько"
// Если лепестков больше 6, то вы начинаете сначала с "I love you"7 лепестков, "a little"затем с 8 лепестков и так далее.

// Когда последний лепесток был оторван, раздались крики восторга, мечты, нахлынувшие мысли и эмоции.

// Ваша цель в этом ката — определить, какую фразу девушки скажут на последнем лепестке цветка с заданным количеством лепестков. Количество лепестков всегда больше 0.


// ✅ SOLUTION:


function howMuchILoveYou(nbPetals) {
   const slovo = {
      1: "I love you", 
      2: "a little",
      3: "a lot",
      4: "passionately",
      5: "madly",
      0: "not at all"
   }  
   return slovo[nbPetals%6] 
   }
console.log(howMuchILoveYou(8))
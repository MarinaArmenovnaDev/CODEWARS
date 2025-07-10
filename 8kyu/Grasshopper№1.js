//❓Терминальная игра — создание прототипа героя
// В этом первом ката серии вам необходимо определить прототип Героя для использования в терминальной игре. Герой должен обладать следующими характеристиками:
//
//
// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

// ✅ SOLUTION:

function Hero (name = "Hero") {
    // add default values here
    this.name = name;
    this.position = "00"
    this.health = 100
    this.damage = 5
    this.experience = 0
}

const myHero = new Hero("Gleb");
console.log(myHero);

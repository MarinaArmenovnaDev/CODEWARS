// ❓ Создайте функцию, которая возвращает имя победителя в поединке между двумя бойцами.

// Каждый боец ​​по очереди атакует другого, и тот, кто убьет другого первым, побеждает. Смерть определяется как наличие health <= 0.

// Каждый боец ​​будет Fighterобъектом/экземпляром. Смотрите класс Fighter ниже на выбранном вами языке.

// Оба healthи damagePerAttack( damage_per_attackдля python) будут целыми числами, большими, чем 0. Вы можете мутировать Fighterобъекты.

// Ваша функция также получает третий аргумент — строку с именем бойца, который атакует первым.

// Пример:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

// ✅ SOLUTION:

function declareWinner(fighter1, fighter2, firstAttacker) {
    if (fighter1.damagePerAttack < fighter2.damagePerAttack) {
        
        return `${fighter2.name} attacks ${fighter1.name}:   
        
    }
  }

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

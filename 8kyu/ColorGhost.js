// ❓ Цветной призрак
// Создать класс Призрак

// Объекты-призраки создаются без каких-либо аргументов.

// При создании экземпляра объектам-призракам присваивается случайный цветовой атрибут «белый», «желтый», «фиолетовый» или «красный».

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//✅  SOLUTION:

let Ghost = function() {
    this.colors = ["white", "yellow", "purple", "red"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  };





// ❓ Цель игры « Утка, утка, гусь» — ходить по кругу , нажимая на голову каждого игрока, пока не будет выбран один из них.

// Задача:

// Дан массив объектов Player и позиция (первая позиция — 1), вернуть nameвыбранного Player.
// name— это свойство Playerобъектов, напримерPlayer.name

// Пример:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name
// Пределы случайного ввода:

// 6≤Игроки≤50
// 5000≤Позиция≤50000

// ✅ SOLUTION:

function duckDuckGoose(players, goose) {
        const index = (goose - 1) % players.length;
        return players[index].name;
}

console.log(duckDuckGoose(["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"], 1));

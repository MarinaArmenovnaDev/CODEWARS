// ❓ У вас есть приложение для группового чата, но кто сейчас онлайн!?

// Вы хотите показать своим пользователям, кто из их друзей находится в сети и доступен для общения!

// Для входных данных массива объектов, содержащих имена пользователей, статус и время с момента последней активности (в минутах), создайте функцию для определения, кто является online, offlineи away.

// Если кто-то есть online, но его lastActivityне было более 10 минут назад, его следует рассмотреть away.

// Входные данные имеют следующую структуру:

// [{
//   username: 'David',
//   status: 'online',
//   lastActivity: 10
// }, {
//   username: 'Lucy',
//   status: 'offline',
//   lastActivity: 22
// }, {
//   username: 'Bob',
//   status: 'online',
//   lastActivity: 104
// }]
// Соответствующий вывод должен выглядеть следующим образом:

// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// Если, например, пользователей нет, onlineвывод должен выглядеть следующим образом:

// {
//   offline: ['Lucy'],
//   away: ['Bob']
// }
// username всегда будет string, status всегда будет либо 'online', либо 'offline'(перечисление UserStatus в C#), а lastActivity всегда будет number >= 0.

// Наконец, если у вас нет друзей в вашем чат-приложении, входными данными будет пустой массив []. В этом случае вы должны вернуть пустой объект {}(пустой словарь в C#).

// ✅ SOLUTION:
const friends = [
  {
    username: "David",
    status: "online",
    lastActivity: 10,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
];

const whosOnline = (friends) => {
  let result = { online: [], offline: [], away: [] };   // создаем пустой массив в который будут складываться разультаты
  for (const friend of friends) { //цикл по друзьям
    if (friend.status === "online" && friend.lastActivity <= 10) {
      result.online.push(friend.username);
    } else if (friend.status === "online" && friend.lastActivity > 10) {
      result.away.push(friend.username);
    } else if (friend.status === "offline") {
      result.offline.push(friend.username);
    }
  }
//   удаляем пустые объекты если в них нет данных

  if (result.online.length === 0) {
    delete result.online;
  }
  if (result.offline.length === 0) {
    delete result.offline;
  }
  if (result.away.length === 0) {
    delete result.away;
  }

  return result;
};

console.log(whosOnline(friends));

// ❓ Боб работает водителем автобуса. Однако он стал чрезвычайно популярен среди жителей города. При таком количестве пассажиров, желающих сесть в его автобус, ему иногда приходится сталкиваться с проблемой нехватки места в автобусе! Он хочет, чтобы вы написали простую программу, сообщающую ему, сможет ли он вместить всех пассажиров.

// Обзор задачи:
// Вам необходимо написать функцию, которая принимает три параметра:

// cap количество людей, которое может вместить автобус, не считая водителя.
// on количество людей в автобусе, не считая водителя.
// wait количество людей, ожидающих посадки в автобус, не считая водителя.
// Если места достаточно, вернуть 0, а если нет, вернуть количество пассажиров, которых он не может взять.

// Примеры использования:
// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting


// ✅ SOLUTION:

function enough(cap, on, wait) {
    const availableSeats = cap - on;
    const cannotTake = wait - availableSeats;
    return cannotTake > 0 ? cannotTake : 0;
}

  console.log(enough(20, 10, 15));
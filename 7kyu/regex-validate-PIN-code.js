// ❓Банкоматы допускают использование 4- или 6-значных PIN-кодов, которые не могут содержать ничего, кроме 4 или 6 цифр.

// Если функции передана допустимая строка PIN-кода, вернуть true, в противном случае вернуть false.

// Примеры ( Вход -> Выход)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// ✅ SOLUTION:

    function validatePIN(pin) {
        if (pin.length !== 4 && pin.length !== 6) {
            return false; 
        }
        for (let i = 0; i < pin.length; i++) {
            if (pin[i] < '0' || pin[i] > '9') {
                return false; 
            }
        }
        return true; 
    }

  console.log(validatePIN('-1b2.4'));

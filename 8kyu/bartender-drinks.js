// ❓Завершите функцию, которая получает в качестве входных данных строку и выдает выходные данные в соответствии со следующей таблицей:


// Input	                Output
// "Jabroni"	            "Patron Tequila"
// "School Counselor"	    "Anything with Alcohol"
// "Programmer"	            "Hipster Craft Beer"
// "Bike Gang Member"	    "Moonshine"
// "Politician"	            "Your tax dollars"
// "Rapper"	                "Cristal"
// anything else	        "Beer"

// Примечание: все остальное является случаем по умолчанию: если входные данные функции не являются ни одним из значений в таблице, то возвращаемое значение должно быть "Beer".

// Убедитесь, что вы охватываете случаи, когда некоторые слова не отображаются с правильной регистрацией. Например, ввод "pOLitiCIaN"должен по-прежнему возвращать "Your tax dollars".



// ✅ SOLUTION:

function getDrinkByProfession(str) {
    return str.toLowerCase() === "jabroni" ? "Patron Tequila" :
           str.toLowerCase() === "school counselor" ? "Anything with Alcohol" :
           str.toLowerCase() === "programmer" ? "Hipster Craft Beer" :
           str.toLowerCase() === "bike gang member" ? "Moonshine" :
           str.toLowerCase() === "politician" ? "Your tax dollars" :
           str.toLowerCase() === "rapper" ? "Cristal" : "Beer";
}


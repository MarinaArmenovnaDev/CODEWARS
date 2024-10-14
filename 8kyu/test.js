// function filter_list(l) {
//     const res = l.filter((i) => typeof(i) === 'number')
//     return res
//   }

// console.log(filter_list([1,2,'a','b']) ); 


//❓ Ваша задача — создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с его цифрами в порядке убывания. По сути, переставьте цифры так, чтобы создать максимально возможное число.

// Примеры:
// Вход: 42145 Выход:54421

// Вход: 145263 Выход:654321

// Вход: 123456789 Выход:987654321

// function descendingOrder(n){
//   let res = n.toString().split("").sort((prev, next)=> next-prev).join("")
//   return +res
// }

//   console.log(descendingOrder(42145));

//❓ Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, то это точно ваш друг! В противном случае, будьте уверены, это не...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Входные строки будут содержать только буквы. Примечание: сохраните исходный порядок имен в выходных данных.

// function friend(friends){
//     const res = []
//     for (let i = 0; i < friends.length; i++) {
//         if(friends[i].length === 4){
//             res.push(friends[i])
//         }
        
//     }
//     return res
//   }

//   function friend(friends){
//     return friends.filter(n => n.length === 4)
//   }

//   console.log(friend(["Ryan", "Kieran", "Jason", "Yous"]));




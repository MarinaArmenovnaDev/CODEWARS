// ❓ Создайте программу, которая фильтрует список строк и возвращает список, содержащий только имена ваших друзей.

// Если в имени ровно 4 буквы, то это точно ваш друг! В противном случае, будьте уверены, это не...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Входные строки будут содержать только буквы. Примечание: сохраните исходный порядок имен в выходных данных.



// ✅ SOLUTION:
function friend(friends){
    let druzi = [ ]

    for (let i = 0; i < friends.length; i++) 
        if(friends[i].length === 4){
            druzi.push(friends[i])
            }
    return druzi
    }
    
  

  console.log(friend(['bomb', 'yfbgdjsy', 'ghfb', 'ghjbjhbjvkjgv']));

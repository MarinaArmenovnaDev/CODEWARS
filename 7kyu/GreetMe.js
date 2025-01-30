// ❓ Напишите метод, который принимает один аргумент в качестве имени, а затем приветствует это имя, пишется с заглавной буквы и заканчивается восклицательным знаком.

// ✅ SOLUTION:

var greet = function(name) {
    if(!name) {
        return "Hello!"
    }
  const res = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
  return `Hello ${res}!`
}


console.log(greet("marins")); 
//❓Как исправить код, чтобы он работал как задумано?
// const timer = {
//     seconds: 0,
//     start() {
//         setInterval(function() {
//             this.seconds++;
//             console.log(this.seconds);
//         }, 1000);
//     }
// };
//
// timer.start(); // Должен выводить 1, 2, 3... каждую секунду

// ✅ SOLUTION:

const timer = {
    seconds: 0,
    start() {
        setInterval(()=> {
            this.seconds++;
            console.log(this.seconds);
        }, 1000);
    }
};

timer.start(); // Должен выводить 1, 2, 3... каждую секунду


//❓Что выведет этот код? Объясните цепочку вызовов:
const obj = {
  prop: 'Value',
  method() {
    return () => {
      console.log(this.prop);
    };
  }
};

const outer = {
  prop: 'Another value',
  method: obj.method()
};

const res2 = outer.method();
console.log(res2)

// ✅ SOLUTION:
//value

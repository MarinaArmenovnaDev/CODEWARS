// ❓ Создайте метод, который принимает список и элемент и возвращает значение, trueесли элемент принадлежит списку, в противном случае false.

// ✅ SOLUTION:
function include(arr, item){
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === item){
        return true
    }
  }
  return false
  }

  console.log(include([1,3], 3));


  function include(arr, item){
    return arr.includes(item);
  }
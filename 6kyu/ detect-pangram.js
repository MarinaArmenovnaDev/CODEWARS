// ❓ Панграмма — это предложение, которое содержит каждую букву алфавита хотя бы один раз. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, потому что в нем хотя бы один раз используются буквы AZ (регистр не имеет значения).

// Дана строка, определить, является ли она панграммой. Верните True, если это так, False, если нет. Игнорируйте цифры и знаки препинания.

// СтруныСтруктуры данныхОсновы
// Объявление
// Как создать портфолио инженера-программиста, чтобы получить свою первую работу младшего разработчика
// Портфолио не является необязательным. Оно необходимо. Узнайте, как создать выдающееся портфолио.


// ✅ SOLUTION:

function isPangram(string){
    let alfavit = 'abcdefghijklmnopqrstuvwxyz'
    const regex = /\s/g;
    const lowercase = string.toLowerCase().replace(regex, "");

    for(let i = 0; i < alfavit.length; i++){
        if(lowercase.indexOf(alfavit[i]) === -1){
          return false
        }
       }
      
      return true
    }


    console.log(isPangram('The quick brown fox jumps over the lazy dog'));

// ❓ Реализуйте String#digit?(на Java StringUtils.isDigit(String)), который должен возвращать значение, trueесли заданный объект является цифрой (0-9), falseв противном случае.

// ✅ SOLUTION:

String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
  };

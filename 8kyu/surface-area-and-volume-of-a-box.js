// ❓ Напишите функцию, которая возвращает общую площадь поверхности и объем коробки в виде массива:[area, volume]

// ✅ SOLUTION:

function getSize(width, height, depth) {
    const pl = 2*depth* height + 2*width*depth + 2*height*width
    const vol = width * height * depth
    return [pl, vol]
}

console.log(getSize(4,2,6));

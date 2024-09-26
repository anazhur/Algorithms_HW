function mergeSortDescending(arr) {
    // Если массив содержит 1 или менее элементов, он уже отсортирован
    if (arr.length <= 1) {
        return arr;
    }

    // Находим средний индекс и делим массив на две части
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Рекурсивно сортируем левую и правую части
    const sortedLeft = mergeSortDescending(left);
    const sortedRight = mergeSortDescending(right);

    // Объединяем отсортированные части в порядке убывания
    return mergeDescending(sortedLeft, sortedRight);
}

function mergeDescending(left, right) {
    let result = [];
    let i = 0, j = 0;

    // Объединяем два отсортированных массива в один
    while (i < left.length && j < right.length) {
        if (left[i] > right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Добавляем оставшиеся элементы из левого массива (если есть)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Добавляем оставшиеся элементы из правого массива (если есть)
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

// Пример использования
const arr = [34, 7, 23, 32, 5, 62];
const sortedArr = mergeSortDescending(arr);
console.log(sortedArr); // [62, 34, 32, 23, 7, 5]

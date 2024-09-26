function quickSortDescending(arr) {
    // Базовый случай: если массив состоит из 0 или 1 элемента, он уже отсортирован
    if (arr.length <= 1) {
        return arr;
    }

    // Выбираем опорный элемент (pivot) — в данном случае берем первый элемент массива
    const pivot = arr[0];

    // Разделяем элементы на те, которые больше или равны опорному, и те, которые меньше
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Рекурсивно применяем сортировку к подмассивам и объединяем результат
    return [...quickSortDescending(left), pivot, ...quickSortDescending(right)];
}

// Пример использования:
const arr = [34, 7, 23, 32, 5, 62];
const sortedArrDescending = quickSortDescending(arr);
console.log(sortedArrDescending); // [62, 34, 32, 23, 7, 5]

// ---------------------------------------------------------------------

function quickSortWithMedianPivot(arr) {
    // Базовый случай: если массив состоит из 0 или 1 элемента, он уже отсортирован
    if (arr.length <= 1) {
        return arr;
    }

    // Выбираем опорный элемент (pivot) — берем средний элемент массива
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    // Разделяем элементы на те, которые больше или равны опорному, и те, которые меньше
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivotIndex) {
            if (arr[i] >= pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
    }

    // Рекурсивно применяем сортировку к подмассивам и объединяем результат
    return [...quickSortWithMedianPivot(left), pivot, ...quickSortWithMedianPivot(right)];
}

// Пример использования:
const arr2 = [34, 7, 23, 32, 5, 62];
const sortedArrWithMedianPivot = quickSortWithMedianPivot(arr2);
console.log(sortedArrWithMedianPivot); // [62, 34, 32, 23, 7, 5]

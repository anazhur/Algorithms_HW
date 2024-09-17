// 1.

function fibonacciRecursive(n) {
    if (n === 1 || n === 2) {
        return 1;
    }
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

function printFibonacciSequence() {
    for (let i = 1; i <= 11; i++) {
        console.log(fibonacciRecursive(i));
    }
}

// Пример использования:
printFibonacciSequence();
// Вывод: 1 1 2 3 5 8 13 21 34 55 89

// ------------------------------------------------------------------

function fibonacciMemoized() {
    const memo = {};

    function fibonacci(n) {
        if (n === 1 || n === 2) {
            return 1;
        }
        if (memo[n]) {
            return memo[n];
        }
        memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
        return memo[n];
    }

    return fibonacci;
}

const fib = fibonacciMemoized();

function printFibonacciSequenceMemo() {
    for (let i = 1; i <= 11; i++) {
        console.log(fib(i));
    }
}

// Пример использования:
printFibonacciSequenceMemo();
// Вывод: 1 1 2 3 5 8 13 21 34 55 89

// 2.

function findKthElement(arr1, arr2, k) {
    let i = 0, j = 0, count = 0;
    let result;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result = arr1[i];
            i++;
        } else {
            result = arr2[j];
            j++;
        }
        count++;
        if (count === k) {
            return result;
        }
    }

    while (i < arr1.length) {
        result = arr1[i];
        i++;
        count++;
        if (count === k) {
            return result;
        }
    }

    while (j < arr2.length) {
        result = arr2[j];
        j++;
        count++;
        if (count === k) {
            return result;
        }
    }

    return -1; // Если k больше длины объединённого массива
}

// Пример использования:
const arr1 = [100, 112, 256, 349, 770];
const arr2 = [72, 86, 113, 119, 265, 445, 892];
const k = 7;

console.log(findKthElement(arr1, arr2, k)); // Вывод: 256

// 1. Реализовать метод вычисления факториала (n!) рекурсивным и итеративным способами.
// Рекурсивный метод:

function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Пример использования:
console.log(factorialRecursive(5)); // 120

// Итеративный метод:

function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Пример использования:
console.log(factorialIterative(5)); // 120

// 2. Реализовать метод funIteration(x, y) с итерационным подходом.
// Метод должен быть реализован итеративно с аналогичной логикой к данному рекурсивному методу funRecursion.

// Итеративный метод:

function funIteration(x, y) {
    while (x !== 0) {
        y = x + y;
        x = x - 1;
        console.log(`Res = ${y}; x = ${x}; y = ${y}`);
    }
    return y;
}

// Пример использования:
console.log(funIteration(5, 3)); // Логика схожая с funRecursion(5, 3)

// 3. Ханойская башня
// Рекурсивное решение:
// Рекурсивный алгоритм решает задачу, разбивая её на подзадачи:

// Перемещаем n-1 дисков с начального стержня на вспомогательный.
// Перемещаем самый большой диск на целевой стержень.
// Перемещаем оставшиеся n-1 дисков со вспомогательного стержня на целевой.

function hanoiRecursive(n, source, target, auxiliary) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${target}`);
        return;
    }
    hanoiRecursive(n - 1, source, auxiliary, target);
    console.log(`Move disk ${n} from ${source} to ${target}`);
    hanoiRecursive(n - 1, auxiliary, target, source);
}

// Пример использования:
hanoiRecursive(3, 'left', 'right', 'middle');

// Итеративное решение:
// Итеративный подход к решению задачи Ханойской башни может быть сложнее, но использует стеки для управления перемещениями дисков.

function hanoiIterative(n, source, target, auxiliary) {
    const moves = [];
    const totalMoves = Math.pow(2, n) - 1;
    const pegs = { 'left': source, 'right': target, 'middle': auxiliary };

    for (let i = 1; i <= totalMoves; i++) {
        let fromPeg, toPeg;
        if (i % 3 === 1) {
            fromPeg = 'left';
            toPeg = n % 2 === 0 ? 'middle' : 'right';
        } else if (i % 3 === 2) {
            fromPeg = 'left';
            toPeg = n % 2 === 0 ? 'right' : 'middle';
        } else {
            fromPeg = 'middle';
            toPeg = 'right';
        }
        moves.push(`Move disk from ${fromPeg} to ${toPeg}`);
    }

    for (let move of moves) {
        console.log(move);
    }
}

// Пример использования:
hanoiIterative(3, 'left', 'right', 'middle');
function buildFrequencyDictionary(text) {
    const frequencyMap = new Map();

    // Приводим текст к нижнему регистру и удаляем все символы, кроме букв
    const cleanedText = text.toLowerCase().replace(/[^а-яёa-z]/g, '');

    // Проходим по каждому символу текста
    for (const char of cleanedText) {
        if (frequencyMap.has(char)) {
            frequencyMap.set(char, frequencyMap.get(char) + 1);
        } else {
            frequencyMap.set(char, 1);
        }
    }

    return frequencyMap;
}

// Пример использования:
const text = "Привет, как дела? Hello, how are you?";
const frequencyDictionary = buildFrequencyDictionary(text);

// Выводим частотный словарь
for (const [letter, count] of frequencyDictionary.entries()) {
    console.log(`${letter}: ${count}`);
}

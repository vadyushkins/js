'use strict';

/**
 * Складывает два целых числа
 * @param {Number} a Первое целое
 * @param {Number} b Второе целое
 * @throws {TypeError} Когда в аргументы переданы не числа
 * @returns {Number} Сумма аргументов
 */
function abProblem(a, b) {
    [a, b].forEach(element => {
        if (typeof (element) !== 'number') {
            throw new TypeError(`${element} is not a Number`);
        }
    });
    return a + b;
}

/**
 * Определяет век по году
 * @param {Number} year Год, целое положительное число
 * @throws {TypeError} Когда в качестве года передано не число
 * @throws {RangeError} Когда год – отрицательное значение
 * @returns {Number} Век, полученный из года
 */
function centuryByYearProblem(year) {
    if (typeof (year) !== 'number') {
        throw new TypeError(`${year} is not a Number`);
    }
    if (year <= 0) {
        throw new RangeError(`${year} is not a positive number`);
    }
    return Math.ceil(year/100);
}

/**
 * Переводит цвет из формата HEX в формат RGB
 * @param {String} hexColor Цвет в формате HEX, например, '#FFFFFF'
 * @throws {TypeError} Когда цвет передан не строкой
 * @throws {RangeError} Когда значения цвета выходят за пределы допустимых
 * @returns {String} Цвет в формате RGB, например, '(255, 255, 255)'
 */
function colorsProblem(hexColor) {
    if (typeof (hexColor) !== 'string') {
        throw new TypeError(`${hexColor} is not a string`);
    }
    const regex = /^#([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i;
    if (regex.test(hexColor) === false) {
        throw new RangeError(`${hexColor} does not match the HEX format`);
    } else {
        const res = regex.exec(hexColor);
        return `(${Number.parseInt(res[1], 16)}, ${Number.parseInt(res[2], 16)}, ${Number.parseInt(res[3], 16)})`;
    }
}

/**
 * Находит n-ое число Фибоначчи
 * @param {Number} n Положение числа в ряде Фибоначчи
 * @throws {TypeError} Когда в качестве положения в ряде передано не число
 * @throws {RangeError} Когда положение в ряде не является целым положительным числом
 * @returns {Number} Число Фибоначчи, находящееся на n-ой позиции
 */
function fibonacciProblem(n) {
    if (typeof (n) !== 'number') {
        throw new TypeError(`${n} is not a Number`);
    }
    if (Number.isInteger(n) === false || n <= 0) {
        throw new RangeError(`${n} is not a positive integer`);
    }
    let fib_prev = 0;
    let fib_cur = 1;
    let cur_id = 1;
    while (cur_id !== n) {
        [fib_prev, fib_cur] = [fib_cur, fib_cur + fib_prev];
        ++cur_id;
    }
    return fib_cur;
}

/**
 * Транспонирует матрицу
 * @param {(Any[])[]} matrix Матрица размерности MxN
 * @throws {TypeError} Когда в функцию передаётся не двумерный массив
 * @returns {(Any[])[]} Транспонированная матрица размера NxM
 */
function matrixProblem(matrix) {
    if (
        Array.isArray(matrix) === false
        || matrix.some(row => {
            return (
                Array.isArray(row) === false
                || row.some(element => Array.isArray(element) === true)
            )
        })
    ) {
        throw new TypeError(`matrix ${matrix} is not square`);
    }
    return matrix[0].map((_, j) => {
        return matrix.map(row => {
            return row[j];
        })
    })
}

/**
 * Переводит число в другую систему счисления
 * @param {Number} n Число для перевода в другую систему счисления
 * @param {Number} targetNs Система счисления, в которую нужно перевести (Число от 2 до 36)
 * @throws {TypeError} Когда переданы аргументы некорректного типа
 * @throws {RangeError} Когда система счисления выходит за пределы значений [2, 36]
 * @returns {String} Число n в системе счисления targetNs
 */
function numberSystemProblem(n, targetNs) {
    if (typeof (n) !== 'number') {
        throw new TypeError(`${n} is not a Number`);
    }
    if (typeof (targetNs) !== 'number') {
        throw new TypeError(`${targetNs} is not a Number`);
    }
    if (targetNs < 2 || targetNs > 36) {
        throw new RangeError(`${targetNs} is not in the [2, 36] range`);
    }
    return n.toString(targetNs);
}

/**
 * Проверяет соответствие телефонного номера формату
 * @param {String} phoneNumber Номер телефона в формате '8–800–xxx–xx–xx'
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Boolean} Если соответствует формату, то true, а иначе false
 */
function phoneProblem(phoneNumber) {
    if (typeof (phoneNumber) !== 'string') {
        throw new TypeError(`${phoneNumber} is not a string`);
    }
    const regex = /^8-800-\d\d\d-\d\d-\d\d$/;
    return regex.test(phoneNumber);
}

/**
 * Определяет количество улыбающихся смайликов в строке
 * @param {String} text Строка в которой производится поиск
 * @throws {TypeError} Когда в качестве аргумента передаётся не строка
 * @returns {Number} Количество улыбающихся смайликов в строке
 */
function smilesProblem(text) {
    if (typeof (text) !== 'string') {
        throw new TypeError(`${text} is not a string`);
    }
    const regex = /((:-\))|(\(-:))/g;
    return (text.match(regex) || []).length;
}

/**
 * Определяет победителя в игре "Крестики-нолики"
 * Тестами гарантируются корректные аргументы.
 * @param {(('x' | 'o')[])[]} field Игровое поле 3x3 завершённой игры
 * @returns {'x' | 'o' | 'draw'} Результат игры
 */
function ticTacToeProblem(field) {
    function _check_field(field, type) {
        let diag_1 = true;
        let diag_2 = true;

        for (let i = 0; i < 3; ++i) {
            let row_flag = true;
            let col_flag = true;
            for (let j = 0; j < 3; ++j) {
                if (field[i][j] !== type) {
                    row_flag = false;
                }
                if (field[j][i] !== type) {
                    col_flag = false;
                }
            }
            if (row_flag === true || col_flag === true) {
                return true;
            }
            if (field[i][i] !== type) {
                diag_1 = false;
            }
            if (field[i][2 - i] !== type) {
                diag_2 = false;
            }
        }

        return diag_1 === true || diag_2 === true;
    }

    if (_check_field(field, 'x')) {
        return 'x';
    }
    if (_check_field(field, 'o')) {
        return 'o';
    }
    return 'draw';
}

module.exports = {
    abProblem,
    centuryByYearProblem,
    colorsProblem,
    fibonacciProblem,
    matrixProblem,
    numberSystemProblem,
    phoneProblem,
    smilesProblem,
    ticTacToeProblem
};

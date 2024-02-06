let myArr = [0, 1, 2, 3, 4, 5, 'hello', 6, 8, 9, NaN, false, 0];

function arrNumber(arr) {
    let even = 0;
    let odd = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            if (arr[i] % 2 === 0) {
                even = even + 1;
            } else {
                odd = odd + 1;
            } if (arr[i] === 0) {
                zero = zero + 1;
            }
        }
    }

    console.log(`Количество четных элементов: ${even}`);
    console.log(`Количество нечетных элементов: ${odd}`);
    console.log(`Количество нулевых элементов: ${zero}`);
}

arrNumber(myArr);
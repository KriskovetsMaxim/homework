//Задача 1.

const number = 3;

if (number % 2 === 0) {
    console.log("Четное число");
} else {
    console.log("Нечетное число");
}

//Задача 2.

const age = 66;
const discount = age < 18 ? 10 : age <= 65 ? 20 : 30;

console.log(discount);

//Задача 3.

const username = prompt("Введите имя пользователя");
const password = prompt("Введите паролья");
if ((username === "admin" || username === "user") && password === "123456") {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}

//Задача 4.

const weight = +prompt("Вес посылки (в килограммах)");
const deliveryType = prompt(`Тип доставки: "Стандарт" "Экспресс" "Премиум"`);

if (weight <= 0) {
    alert("Некорректный вес посылки")
} else {
    const baseCost = weight < 1 ? 5 : weight <= 5 ? 10 : 15;
    let coefficient = 0;

    switch (deliveryType) {
        case "Стандарт":
            coefficient = 1;
            break
        case "Экспресс":
            coefficient = 1.5;
            break
        case "Премиум":
            coefficient = 2;
            break
        default:
            alert("Неверный тип доставки");
            coefficient = null;    
    }

    if (coefficient !== null) {
        const finalCost = baseCost * coefficient;
        alert(`Итговая стоимость ${finalCost}$`);
    }
}
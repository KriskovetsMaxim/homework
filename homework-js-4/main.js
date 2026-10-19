//Задача 1.
function calculateFinalPrice (basePrice, discountPercentage, taxRate) {
    const discount = (basePrice * discountPercentage) / 100;
    const discountedPrice = basePrice - discount;
    const tax = discountedPrice * taxRate;
    return discountedPrice + tax; 

}


console.log(calculateFinalPrice (100, 10, 0.2));
console.log(calculateFinalPrice (100, 10, 0));

//Задача 2.
function checkAccess (username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен"
    } else {
        return "Доступ запрещен"
    }
}

console.log (checkAccess("admin", "1234567"))

//Задача 3.

function getTimeOfDay (currentTime) {
    if (currentTime >= 0 && currentTime <= 5) {
        return "Ночь"
    } else if (currentTime >= 6 && currentTime <= 11){
        return "Утро"
    } else if (currentTime >= 12 && currentTime <= 17) {
        return "День"
    } else if (currentTime >= 18 && currentTime <= 23) {
        return "Вечер"
    } else {
        return "Некорректное время"
    }
}

console.log(getTimeOfDay(4))

//Задача 4. 

function findFirstEven (start, end) {
    if (start > end) return "Некорректный диапозон";
    const firstEven = start % 2 === 0 ? start : start + 1;
    return firstEven <= end ? firstEven : "Чётных чисел нет"
}

console.log(findFirstEven(5, 3))
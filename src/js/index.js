//1

const drinks = "Кава";
switch (drinks) {
    case "Кава":
        console.log("Ви вибрали Каву");
        break;
    case "Чай":
        console.log("Ви вибрали Чай");
        break;
    case "Сік":
        console.log("Ви вибрали Сік");
        break;
}

//2

const weekDay = "Wednesday";
switch(weekDay) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Робочий день");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Вихідний день");
        break;
}

//3

const monthNumber = 12;
switch(monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log("Зима");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Весна");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Літо");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Осінь");
        break;
}

//4

const trafficLight = "red";
switch(trafficLight) {
    case "red":
        console.log("Стоп");
        break;
    case "yellow":
        console.log("Йти");
        break;
    case "yellow":
        console.log("Чекати");
        break;
}

//5

const number1 = 5;
const number2 = 10;
const operator = "-";

let result;
switch(operator) {
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "/":
        if(number2 === 0) {
            console.log("На нуль ділити не можна");
            break
        }
        result = number1 / number2;
        break;
    case "*":
        result = number1 * number2;
        break;
}
console.log(`${result}`);
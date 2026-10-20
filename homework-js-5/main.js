//Задача 1.
const person = {
    name:"Максим",
    surname: "Крисковец",
    aeg: 29,
};

console.log(person);

//Задача 2.
const piter = {
    age: 30,
    name: "Питер"
}

function isEmpty(object){
    for (const key in object) {
        return false;
    }
    return true;
};

console.log(isEmpty(piter));

//Задача 3.

const profilePiter = {
    name:"Питер",
    age: 30,
    isProgremmer:true,
}

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
    
}

const profileAlex = cloneAndModify(profilePiter, {name:"Alex"});

for (const key in profileAlex) {
    console.log(profileAlex[key])
}

// console.log(profilePiter);
// console.log(profileAlex);

//Задача 4.

const myObject = {
    method1() {
        console.log("Метод 1 вызван")
    },
    method2() {
        console.log("Метод 2 вызван")
    },
    property: "Это не метод",
};

const callAllMethods = (object) => {
    for(const key in object) {
        if(typeof object[key] === "function") {
            object[key]();
        }
    }
}

callAllMethods(myObject);
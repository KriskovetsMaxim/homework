//Задание 1.

const users = [
  {
    name: `Alex`,
    age: 24,
    isAdmin: false,
  },
  {
    name: `Bob`,
    age: 13,
    isAdmin: false,
  },
  {
    name: `Jhon`,
    age: 31,
    isAdmin:true,
  },
  {
    name: `Jane`,
    age: 20,
    isAdmin: false,
  },
];

users.push(
  {
    name: `Ann`,
    age: 19,
    isAdmin: false,
  },
   {
    name: `Jack`,
    age: 43,
    isAdmin: true,
  }
);

console.log(users);

//Задание 2. 

function getUserAverAge(users) {
  let sumAges = 0;
  let averageAge = 0;
  for (let i = 0; i < users.length; i++) {
    sumAges += users[i].age;
    averageAge = sumAges / users.length;
  }
  console.log(`Средний возраст пользователей: ${averageAge}`)
};

getUserAverAge(users);

//Задание 3.

//Сделал для себя двумя способами.

function getAllAdmins(users) {
  const admins = [];
  for (let i = 0; i < users.length; i++) {
    if(users[i].isAdmin === true) {
      admins.push(users[i]);
    };
  };
  return admins;
};

console.log(getAllAdmins(users));

function getAllAdmins(users) {
  const admins = [];
  users.forEach(user => {
    if (user.isAdmin === true) {
      admins.push(user);
    }
  });
  return admins;
}

console.log(getAllAdmins(users));

// Задача 4.

function first(array, n) {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(array[i]);
  } if (n === undefined) {
    return array[0];
  } else if (array.length < n) {
    console.error(`Значение n (${n}) не может быть больше длины массива: Длина массива ${array.length}`);
    return
  }
  return newArray;
};

console.log(first(users,));
let courses = [
  {id: 1, title: "Математика", author: "Іваненко", teachers: ["Петренко"], taskType: "Ігрові", usersDay1: 50, usersDay2: 40, duration: 120},
  {id: 2, title: "Фізика", author: "Сидоренко", teachers: ["Коваль"], taskType: "Задачі", usersDay1: 30, usersDay2: 35, duration: 150},
  {id: 3, title: "Хімія", author: "Петренко", teachers: ["Іваненко"], taskType: "Лабораторії", usersDay1: 20, usersDay2: 25, duration: 100},
  {id: 4, title: "Біологія", author: "Коваль", teachers: ["Сидоренко"], taskType: "Вікторини", usersDay1: 60, usersDay2: 45, duration: 200},
  {id: 5, title: "Історія", author: "Гнатенко", teachers: ["Петренко"], taskType: "Тести", usersDay1: 40, usersDay2: 30, duration: 80},
  {id: 6, title: "Література", author: "Олійник", teachers: ["Іваненко"], taskType: "Есе", usersDay1: 25, usersDay2: 15, duration: 90},
  {id: 7, title: "Інформатика", author: "Іваненко", teachers: ["Коваль"], taskType: "Кодинг", usersDay1: 55, usersDay2: 50, duration: 210},
  {id: 8, title: "Мистецтво", author: "Сидоренко", teachers: ["Гнатенко"], taskType: "Малювання", usersDay1: 35, usersDay2: 20, duration: 110},
  {id: 9, title: "Філософія", author: "Гнатенко", teachers: ["Олійник"], taskType: "Дискусії", usersDay1: 15, usersDay2: 10, duration: 70},
  {id: 10, title: "Географія", author: "Петренко", teachers: ["Іваненко"], taskType: "Мапи", usersDay1: 45, usersDay2: 40, duration: 130}
];


function sortAndAverage(courses) {
  courses.sort((a,b) => a.duration - b.duration);
  let totalUsers = courses.reduce((sum, course) => sum + (course.usersDay1 + course.usersDay2) / 2, 0);
  let avgUsers = totalUsers / courses.length;
  console.log("Середня кількість користувачів:", avgUsers);
}


function findMinUsersDay2(courses) {
  let minCourse = courses.reduce((min, course) => course.usersDay2 < min.usersDay2 ? course : min);
  console.log("ID курсу з мінімальною кількістю користувачів (Day2):", minCourse.id);
}

function addCourse(newCourse) {
  let hasEmptyField = Object.values(newCourse).some(value => !value && value !== 0);
  if (hasEmptyField) {
    courses.unshift(newCourse);
  } else {
    let index = courses.findIndex(course => course.author > newCourse.author);
    if (index === -1) courses.push(newCourse);
    else courses.splice(index, 0, newCourse);
  }
}

function calculateDurations(selectedCourses) {
  return selectedCourses.map(course => selectedCourses.length > 3 ? course.duration * 1.5 : course.duration);
}

sortAndAverage(courses);
findMinUsersDay2(courses);

addCourse({id: 11, title: "Психологія", author: "Бондар", teachers: ["Сидоренко"], taskType: "Тести", usersDay1: 40, usersDay2: 35, duration: 100});
console.log("Список курсів після додавання нового курсу:", courses);

let durations = calculateDurations(courses.slice(0, 4));
console.log("Тривалість курсів:", durations);
class Child {
  constructor(lastName, firstName, age, email, feedbackGoal, date, time) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.age = age;
    this.email = email;
    this.feedbackGoal = feedbackGoal;
    this.date = new Date(date + " " + time);
  }
}

let children = [
  new Child("Іваненко", "Олег", 2, "oleg@gmail.com", "Скарга", "2025-09-10", "09:30"),
  new Child("Петренко", "Марія", 4, "maria@gmail.com", "Пропозиція", "2025-09-15", "11:00"),
  new Child("Сидоренко", "Віктор", 6, "viktor@gmail.com", "Співпраця", "2025-10-01", "10:15"),
  new Child("Коваль", "Олена", 3, "olena@gmail.com", "Наявність помилки", "2025-10-05", "14:45"),
  new Child("Гнатенко", "Ігор", 8, "igor@gmail.com", "Скарга", "2025-09-20", "16:00"),
  new Child("Олійник", "Наталя", 5, "nataliya@gmail.com", "Пропозиція", "2025-09-25", "12:30"),
  new Child("Бондар", "Андрій", 7, "andriy@gmail.com", "Співпраця", "2025-10-10", "09:00"),
  new Child("Шевченко", "Людмила", 1, "lyudmyla@gmail.com", "Наявність помилки", "2025-09-05", "08:45"),
  new Child("Мельник", "Тарас", 9, "taras@gmail.com", "Скарга", "2025-09-12", "13:20"),
  new Child("Кравченко", "Оксана", 4, "oksana@gmail.com", "Пропозиція", "2025-10-03", "15:10")
];


function filterByMonthAndTime(children, month, time) {
  console.log(`Діти, які звернулись у місяці ${month} до часу ${time}:`);
  children.forEach(child => {
    if (child.date.getMonth() + 1 === month && child.date.getHours() < time) {
      console.log(`${child.firstName} ${child.lastName} — ${child.date}`);
    }
  });
}


function minAgeChild(children) {
  let minChild = children.reduce((min, child) => child.age < min.age ? child : min, children[0]);
  console.log(`Мінімальний вік: ${minChild.age}, Email: ${minChild.email}, Дата: ${minChild.date}`);
}


function ageGroups(children) {
  let groups = { ранній: 0, середній: 0, дошкільний: 0, шкільний: 0 };
  children.forEach(child => {
    if (child.age <= 3) groups["ранній"]++;
    else if (child.age > 3 && child.age <= 5) groups["середній"]++;
    else if (child.age > 5 && child.age <= 7) groups["дошкільний"]++;
    else groups["шкільний"]++;
  });
  console.log("Кількість дітей за віковими групами:", groups);
}


function sortByEmail(children) {
  let sorted = [...children].sort((a,b) => a.email.localeCompare(b.email));
  console.log("Діти за алфавітом email та їх мета:");
  sorted.forEach(child => console.log(child.email, "-", child.feedbackGoal));
}

filterByMonthAndTime(children, 9, 15); 
minAgeChild(children);
ageGroups(children);
sortByEmail(children);
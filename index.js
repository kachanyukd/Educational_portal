document.addEventListener("DOMContentLoaded", () => {
  const toyImages = [
    "images/toy_bear.png",
    "images/toy_car.png",
  ];

  const now = new Date();
  const hour = now.getHours();
  if (hour >= 6 && hour < 21) {
    document.body.classList.add("day-mode");
  }

  const header = document.querySelector("header");

  function createFallingToy() {
    const toy = document.createElement("img");
    toy.src = toyImages[Math.floor(Math.random() * toyImages.length)];
    toy.classList.add("falling-toy");

    const headerRect = header.getBoundingClientRect();
    const startLeft = Math.random() * (headerRect.width - 80);
    const toySize = 60 + Math.random() * 20;

    toy.style.left = `${startLeft}px`;
    toy.style.width = `${toySize}px`;

    header.appendChild(toy);

    let top = -100;
    let rotation = Math.random() * 360;
    const fallSpeed = 0.7 + Math.random() * 1.8;
    const rotationSpeed = Math.random() * 2 - 1;

    function fall() {
      top += fallSpeed;
      rotation += rotationSpeed;
      toy.style.top = `${top}px`;
      toy.style.transform = `rotate(${rotation}deg)`;

      if (top > headerRect.height + 20) {
        toy.remove();
      } else {
        requestAnimationFrame(fall);
      }
    }

    fall();
  }

  setInterval(createFallingToy, 800);

  const authors = [
    {
      name: "Іван Іваненко",
      img: "images/ivanenko.jpg",
      quote: "Навчання — це пригода, яку ми створюємо разом з дітьми!"
    },
    {
      name: "Петро Петренко",
      img: "images/petrenko.jpg",
      quote: "Кожна дитина — це всесвіт ідей, який варто розкрити."
    },
    {
      name: "Сидор Сидоренко",
      img: "images/sidorenko.jpg",
      quote: "Найкраще навчання — через гру та відкриття!"
    }
  ];

  const main = document.querySelector("main");
  const authorsSection = document.createElement("section");
  authorsSection.classList.add("authors-section");

  const title = document.createElement("h2");
  title.textContent = "Автори курсу";
  authorsSection.appendChild(title);

  const authorsContainer = document.createElement("div");
  authorsContainer.classList.add("authors-container");

  authors.forEach(author => {
    const card = document.createElement("div");
    card.classList.add("author-card");

    const inner = document.createElement("div");
    inner.classList.add("card-inner");

    const front = document.createElement("div");
    front.classList.add("card-front");
    const img = document.createElement("img");
    img.src = author.img;
    img.alt = author.name;
    front.appendChild(img);

    const back = document.createElement("div");
    back.classList.add("card-back");
    back.innerHTML = `<p>"${author.quote}"</p><span>— ${author.name}</span>`;

    inner.appendChild(front);
    inner.appendChild(back);
    card.appendChild(inner);
    authorsContainer.appendChild(card);
  });

  authorsSection.appendChild(authorsContainer);
  main.appendChild(authorsSection);
});
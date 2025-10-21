document.addEventListener("DOMContentLoaded", () => {

  const main = document.querySelector("main");

  const accordion = document.createElement("div");
  accordion.classList.add("accordion");

  const courses = document.querySelectorAll(".course");

  courses.forEach((course, index) => {
    const headerText = course.querySelector("h2").textContent;

    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const header = document.createElement("div");
    header.classList.add("accordion-header");
    header.textContent = headerText;

    const content = document.createElement("div");
    content.classList.add("accordion-content");

    const desc = course.querySelector("p") ? course.querySelector("p").outerHTML : "";
    content.innerHTML = desc;

    header.addEventListener("click", () => {
      document.querySelectorAll(".accordion-content").forEach(c => {
        if (c !== content) c.style.maxHeight = null;
      });

      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      const headerHeight = document.querySelector("header").offsetHeight;
      const courseTop = course.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: courseTop - headerHeight - 10, 
        behavior: "smooth"
      });
    });

    item.appendChild(header);
    item.appendChild(content);
    accordion.appendChild(item);
  });

  main.prepend(accordion);

});
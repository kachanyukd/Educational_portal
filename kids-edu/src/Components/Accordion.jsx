import { useEffect } from "react";

export default function Accordion() {
  useEffect(() => {
    const courses = document.querySelectorAll(".course");
    if (!courses.length) return;

    const accordion = document.createElement("div");
    accordion.classList.add("accordion-fixed");

    courses.forEach((course, index) => {
      const title = course.querySelector("h2")?.textContent || `Курс ${index + 1}`;
      const desc = course.querySelector("p")?.textContent || "Опис відсутній";

      const item = document.createElement("div");
      item.classList.add("accordion-item");

      const header = document.createElement("div");
      header.classList.add("accordion-header");
      header.textContent = title;

      const content = document.createElement("div");
      content.classList.add("accordion-content");
      content.textContent = desc;

      header.addEventListener("click", () => {
        document.querySelectorAll(".accordion-content").forEach(c => {
          if (c !== content) c.style.maxHeight = null;
        });

        content.style.maxHeight =
          content.style.maxHeight ? null : `${content.scrollHeight}px`;

        const headerHeight = document.querySelector("header").offsetHeight;
        const courseTop = course.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: courseTop - headerHeight - 10,
          behavior: "smooth",
        });
      });

      item.appendChild(header);
      item.appendChild(content);
      accordion.appendChild(item);
    });

    if (!document.querySelector(".accordion-fixed")) {
      document.body.appendChild(accordion);
    }
  }, []);

  return null;
}
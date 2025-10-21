document.addEventListener("DOMContentLoaded", () => {

  const textarea = document.getElementById("details");

  const tooltip = document.createElement("div");
  tooltip.className = "tooltip";
  tooltip.textContent = "Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка";
  document.body.appendChild(tooltip);

  textarea.addEventListener("mouseenter", () => {
    textarea.style.backgroundColor = "#e0f7ff";
    textarea.style.border = "2px solid #6fc3ff";
    textarea.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

    const rect = textarea.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    tooltip.style.left = `${rect.right + 10 + scrollLeft}px`;
    tooltip.style.top = `${rect.top + scrollTop}px`;
    tooltip.style.display = "block";
  });

  textarea.addEventListener("mouseleave", () => {
    textarea.style.backgroundColor = "";
    textarea.style.border = "";
    textarea.style.boxShadow = "";
    tooltip.style.display = "none";
  });
});
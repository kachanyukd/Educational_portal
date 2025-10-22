import { useEffect, useRef, useState } from "react";

export default function Feedback() {
  const textareaRef = useRef(null);
  const [tooltipStyle, setTooltipStyle] = useState({ display: "none" });

  useEffect(() => {
    const el = textareaRef.current;
    function onEnter() {
      el.style.backgroundColor = "#e0f7ff";
      el.style.border = "2px solid #6fc3ff";
      el.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

      const r = el.getBoundingClientRect();
      setTooltipStyle({
        display: "block",
        left: `${r.right + window.scrollX + 10}px`,
        top: `${r.top + window.scrollY}px`,
      });
    }
    function onLeave() {
      el.style.backgroundColor = "";
      el.style.border = "";
      el.style.boxShadow = "";
      setTooltipStyle({ display: "none" });
    }
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Зворотній зв’язок</h2>

      <form id="feedback-form" action="#" method="post" className="form">
        <fieldset>
          <legend>Персональна інформація</legend>

          <label htmlFor="parent-name">Прізвище та ім’я одного із батьків:</label>
          <input type="text" id="parent-name" name="parent-name" required />

          <label htmlFor="parent-email">E-mail одного із батьків:</label>
          <input type="email" id="parent-email" name="parent-email" required />

          <label htmlFor="child-age">Вік дитини:</label>
          <input type="number" id="child-age" name="child-age" min="6" max="17" required />

          <label htmlFor="child-gender">Стать дитини:</label>
          <select id="child-gender" name="child-gender" required>
            <option value="">Виберіть стать</option>
            <option value="male">Хлопчик</option>
            <option value="female">Дівчинка</option>
            <option value="other">Інше</option>
          </select>
        </fieldset>

        <label htmlFor="feedback-goal">Мета зворотнього зв’язку:</label>
        <select id="feedback-goal" name="feedback-goal" required>
          <option value="">Виберіть мету</option>
          <option value="cooperation">Співпраця</option>
          <option value="complaint">Скарга на неякісний контент</option>
          <option value="suggestion">Пропозиція</option>
          <option value="error">Наявність помилки</option>
        </select>

        <label htmlFor="details">Детально:</label>
        <textarea
          id="details"
          name="details"
          rows="5"
          maxLength={500}
          placeholder="Опишіть проблему або пропозицію..."
          ref={textareaRef}
        />
        <p id="char-count">Залишилось символів: 500</p>

        <label htmlFor="consent" className="checkbox-inline">
          <input type="checkbox" id="consent" name="consent" required /> Я даю згоду на обробку моїх персональних даних
        </label>

        <div style={{ marginTop: "1rem" }}>
          <button type="submit">Відправити</button>
        </div>
      </form>

      <div className="tooltip" style={tooltipStyle}>
        Ваша думка для нас важлива! Конкретизуйте мету звернення, будь ласка
      </div>
    </>
  );
}
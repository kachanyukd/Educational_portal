import "./courses.css";
export default function Courses() {
  return (
    <div className="courses-page">
      <h2>Наші курси</h2>

      <section className="course">
        <h2>Математика</h2>
        <ul>
          <li>Урок 1: Числа</li>
          <li>Урок 2: Арифметика</li>
          <li>Урок 3: Найпростіші задачі</li>
        </ul>
        <p><strong>Тип завдань:</strong> Ігрові вправи, тести</p>
        <img src="images/math_logo.png" alt="Математика" />
      </section>

      <section className="course">
        <h2>Іноземна мова</h2>
        <ul>
          <li>Урок 1: Абетка</li>
          <li>Урок 2: Основні слова</li>
          <li>Урок 3: Прості речення</li>
        </ul>
        <p><strong>Тип завдань:</strong> Вікторини, аудіо-завдання</p>
        <img src="images/eng_logo.png" alt="Іноземна мова" />
      </section>

      <section className="course">
        <h2>Природознавство</h2>
        <ul>
          <li>Урок 1: Рослини</li>
          <li>Урок 2: Тварини</li>
          <li>Урок 3: Явища природи</li>
        </ul>
        <p><strong>Тип завдань:</strong> Інтерактивні презентації</p>
        <img src="images/biog_logo.png" alt="Природознавство" />
      </section>

      <section className="course">
        <h2>Інформатика</h2>
        <ul>
          <li>Урок 1: Основи комп’ютера</li>
          <li>Урок 2: Цифрова грамотність</li>
          <li>Урок 3: Найпростіше програмування</li>
        </ul>
        <p><strong>Тип завдань:</strong> Ігрові вправи, прості програми</p>
        <img src="images/comps_logo.png" alt="Інформатика" />
      </section>

      <section className="course">
        <h2>Малювання</h2>
        <ul>
          <li>Урок 1: Основи малюнка</li>
          <li>Урок 2: Кольори</li>
          <li>Урок 3: Малювання навколишнього світу</li>
        </ul>
        <p><strong>Тип завдань:</strong> Онлайн-галереї</p>
        <img src="images/art_logo.png" alt="Малювання" />
      </section>
    </div>
  );
}

export default function Authors() {
  const authors = [
    {
      name: "Іван Іваненко",
      img: "/images/ivanenko.jpg",
      quote: "Навчання — це пригода, яку ми створюємо разом з дітьми!"
    },
    {
      name: "Петро Петренко",
      img: "/images/petrenko.jpg",
      quote: "Кожна дитина — це всесвіт ідей, який варто розкрити."
    },
    {
      name: "Сидор Сидоренко",
      img: "/images/sidorenko.jpg",
      quote: "Найкраще навчання — через гру та відкриття!"
    }
  ];

  return (
    <section className="authors-section">
      <h2>Автори курсу</h2>
      <div className="authors-container">
        {authors.map((author, index) => (
          <div key={index} className="author-card">
            <div className="card-inner">
              <div className="card-front">
                <img src={author.img} alt={author.name} />
              </div>
              <div className="card-back">
                <p>"{author.quote}"</p>
                <span>— {author.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
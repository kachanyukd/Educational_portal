import { useEffect, useRef } from "react";

export default function Header() {
  const headerRef = useRef(null);
  const toyContainerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const tContainer = toyContainerRef.current;

    function createFallingToy() {
      const toy = document.createElement("img");
      const toys = ["/images/toy_bear.png", "/images/toy_car.png"];
      toy.src = toys[Math.floor(Math.random() * toys.length)];
      toy.className = "falling-toy";

      const rect = header.getBoundingClientRect();
      const size = 60 + Math.random() * 20; 
      const startLeft = Math.random() * (rect.width - size);

      toy.style.left = `${startLeft}px`;
      toy.style.width = `${size}px`;
      toy.style.top = `-100px`;

      tContainer.appendChild(toy);

      let top = -100;
      let rotation = Math.random() * 360;
      const fallSpeed = 0.8 + Math.random() * 1.4;
      const rotationSpeed = Math.random() * 2 - 1;

      function fall() {
        top += fallSpeed;
        rotation += rotationSpeed;
        toy.style.top = `${top}px`;
        toy.style.transform = `rotate(${rotation}deg)`;

        if (top > rect.height + 30) {
          toy.remove();
        } else {
          requestAnimationFrame(fall);
        }
      }
      fall();
    }

    const id = setInterval(createFallingToy, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="header-hero" ref={headerRef} role="banner">
      {}
      <div className="toy-plane" aria-hidden="true" ref={toyContainerRef} />
      {}
      <div className="container header-content">
        <div className="logo">
          <img src="/images/main_logo.png" alt="Логотип порталу" />
          <h1>Дитячий навчальний портал</h1>
        </div>
      </div>
    </header>
  );
}
import { Outlet, Link, useLocation } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Authors from "./Components/Authors.jsx";
import Accordion from "./Components/Accordion.jsx";

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />

      <nav className="topnav container" aria-label="Головне меню">
        <ul>
          <li><Link to="/">Головна</Link></li>
          <li><Link to="/feedback">Зворотній зв’язок</Link></li>
          <li><Link to="/courses">Наші курси</Link></li>
        </ul>
      </nav>

      {location.pathname === "/courses" && (
        <div className="container" style={{ marginTop: "1rem" }}>
          <Accordion />
        </div>
      )}

      <main className="container">
        <Outlet />
      </main>

      {location.pathname === "/" && (
        <div className="container" style={{ marginTop: "2rem" }}>
          <Authors />
        </div>
      )}

      <footer className="site-footer" id="feedback" tabIndex={0}>
        <p>Адреса: м. Київ, вул. Богдана Гаврилишина, 24</p>
        <p>Телефони: +38 (067) 752-51-21, +38 (068) 752-51-21</p>
        <p>&copy; <time dateTime="2025">2025</time> Дитячий навчальний портал</p>
      </footer>
    </>
  );
}
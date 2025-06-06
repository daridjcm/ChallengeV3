import { Routes, Route, Link } from "react-router-dom";
import Subida from "./components/Subida";
import Articulos from "./components/Articulos";
import "./index.css"; // Importar estilos CSS

const App = () => {
  return (
    <section className="app-container">
      <header>
        <h1>Gestión de Productos</h1>
        <p>Administra productos y precios especiales de manera eficiente.</p>
        <nav>
          <ul>
            <Link to="/articulos">
              <li>📦 Artículos</li>
            </Link>
            <Link to="/subida">
              <li>⬆️ Subida</li>
            </Link>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/subida" element={<Subida />} />
        </Routes>
      </main>

      <footer>
        <p>© 2025 Gestión de Productos | Creado por @Daridjcm</p>
      </footer>
    </section>
  );
};

export default App;

import React from 'react';
import './App.css';

/* Componente para el Header con navegación */
function DashboardHeader() {
  return (
    <header className="dashboard-header">
      <h1>Mi App de Gestión</h1>
      <nav>
        {/* Estos botones se pueden luego enlazar con rutas o con funciones específicas */}
        <button onClick={() => alert("Ver Mapa")}>Mapa</button>
        <button onClick={() => alert("Ver Tareas")}>Tareas</button>
        <button onClick={() => alert("Ver Trabajadores")}>Trabajadores</button>
        <button onClick={() => alert("Ver Árboles")}>Árboles</button>
        <button onClick={() => alert("Ver Informes")}>Informes</button>
        <button onClick={() => alert("Ver Notificaciones")}>Notificaciones</button>
      </nav>
    </header>
  );
}

/* Componente para el Sidebar Izquierdo (menú o iconos) */
function SidebarLeft() {
  return (
    <aside className="sidebar-left">
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>🏠</li>
        <li style={{ marginBottom: '1rem' }}>🗂️</li>
        <li style={{ marginBottom: '1rem' }}>📊</li>
        {/* Agrega más elementos según se requiera */}
      </ul>
    </aside>
  );
}

/* Componente para el contenido principal: aquí se integraría el mapa */
function MainContent() {
  return (
    <main className="main-content">
      {/* Aquí se debe integrar Google Maps. Por ahora, un div simulando el mapa */}
      <div
        id="gmap"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#ddd",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Mapa Dinámico</h2>
      </div>
    </main>
  );
}

/* Componente para el Sidebar Derecho: muestra información detallada del sector */
function SidebarRight() {
  return (
    <aside className="sidebar-right">
      <h2>Información del Sector</h2>
      <p>Aquí se muestran detalles del sector seleccionado.</p>
      {/* Puedes agregar formularios, tablas o tarjetas con la información */}
    </aside>
  );
}

/* Componente principal que junta todo */
function App() {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
      <SidebarLeft />
      <MainContent />
      <SidebarRight />
    </div>
  );
}

export default App;

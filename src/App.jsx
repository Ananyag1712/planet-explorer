
import { useState } from 'react';
import './App.css';

function App() {

  const planets = [
    {
      name: "Earth",
      type: "Terrestrial Planet",
      description: "Earth is our home planet. It is the only known planet to support life.",
      color: "#2998ff"
    },
    {
      name: "Mars",
      type: "Terrestrial Planet",
      description: "Mars is known as the Red Planet because of its reddish surface.",
      color: "#ed6848"
    },
    {
      name: "Jupiter",
      type: "Gas Giant",
      description: "Jupiter is the largest planet in our solar system.",
      color: "#d5a16e"
    },
    {
      name: "Saturn",
      type: "Gas Giant",
      description: "Saturn is famous for its beautiful ring system.",
      color: "#d6bd79"
    }
  ];

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <div className="app">

      <nav className="navbar">
        <h2>🚀 Planet Explorer</h2>
        <span>Explore the Universe</span>
      </nav>

      <section className="hero">
        <h1>Explore Our Solar System</h1>
        <p>Discover the amazing planets in our universe.</p>
      </section>

      <section className="planet-container">

        {planets.map((planet) => (
          <div
            className="planet-card"
            key={planet.name}
            onClick={() => setSelectedPlanet(planet)}
          >
            <div
              className="planet-circle"
              style={{ backgroundColor: planet.color }}
            ></div>

            <h2>{planet.name}</h2>
            <p>{planet.type}</p>

            <button>Explore Planet</button>
          </div>
        ))}

      </section>

      {selectedPlanet && (
        <section className="details">
          <h2>{selectedPlanet.name}</h2>
          <p>{selectedPlanet.description}</p>

          <button onClick={() => setSelectedPlanet(null)}>
            Close
          </button>
        </section>
      )}

    </div>
  );
}

export default App;

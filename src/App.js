import React, { useEffect, useState } from "react";
import api from "./services/api"; // ou apenas "./api" dependendo da pasta
import "./App.css";

function App() {
  const [skins, setSkins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api
      .getSkins()
      .then((response) => {
        setSkins(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar as skins:", error);
      });
  }, []);

  const filteredSkins = skins.filter((skin) =>
    skin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Catálogo de Skins CSGO</h1>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Buscar skin..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "5px",
            width: "250px",
            border: "none",
            outline: "none",
          }}
        />
      </div>

      <div className="filmes-container">
        {filteredSkins.map((skin) => (
          <div key={skin.id} className="filmes-card">
            <img src={skin.image} alt={skin.name} className="filme-imagem" />
            <div className="filme-info">
              <h2>{skin.name}</h2>
              <p><strong>Arma:</strong> {skin.weapon?.name || "Desconhecida"}</p>
              <p>
                <strong>Raridade:</strong>{" "}
                <span style={{ color: skin.rarity?.color || "#fff" }}>
                  {skin.rarity?.name || "Não informada"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

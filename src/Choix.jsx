import React from "react";

function Choix({ setEquationType }) {
  const handleSelectChange = (e) => {
    setEquationType(e.target.value);
  };

  return (
    <div>
      <label>Choisissez le type d'équation :</label>
      <select className="choix" onChange={handleSelectChange}>
        <option value="">Sélectionnez...</option>
        <option value="premier">Équation du Premier Degré</option>
        <option value="second">Équation du Second Degré</option>
      </select>
    </div>
  );
}

export default Choix;

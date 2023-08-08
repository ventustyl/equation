import React from "react";

function Bouton({ solveEquation }) {
  return (
    <div>
      <button onClick={solveEquation}>Résoudre l'équation</button>
    </div>
  );
}

export default Bouton;

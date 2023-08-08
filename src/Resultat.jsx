import React from "react";

function Resultat({ equationType, results, delta }) {
  let solutions = [];
  let deltaMessage = "";

  if (equationType === "second") {
    if (delta < 0) {
      deltaMessage = `Delta : ${delta}. Aucune solution réelle.`;
    } else if (delta === 0) {
      deltaMessage = `Delta : ${delta}. Une solution réelle : x = ${results[0]}`;
    } else {
      deltaMessage = `Delta : ${delta}. Deux solutions réelles : x1 = ${results[0]}, x2 = ${results[1]}`;
    }
  }

  return (
    <div>
      {results.length > 0 && (
        <div className="resultat">
          <p>Résultats :</p>
          <ul>
            {results.map((result, index) => (
              <li key={index}>{`x${index + 1} = ${result}`}</li>
            ))}
          </ul>
        </div>
      )}
      {deltaMessage && <p>{deltaMessage}</p>}
    </div>
  );
}

export default Resultat;

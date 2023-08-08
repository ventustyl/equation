import React, { useState } from "react";
import Choix from "./Choix";
import Equation from "./Equation";
import Bouton from "./Bouton";
import Resultat from "./Resultat";
import Raz from "./Raz";
import "./App.css";

function App() {
  const initialEquationState = {
    equationType: "",
    equation: {},
    results: [],
    delta: 0,
  };

  const [equationType, setEquationType] = useState(
    initialEquationState.equationType
  );
  const [equation, setEquation] = useState(initialEquationState.equation);
  const [results, setResults] = useState(initialEquationState.results);
  const [delta, setDelta] = useState(initialEquationState.delta);
  const [error, setError] = useState("");

  const solveEquation = () => {
    if (equationType === "premier") {
      const { AX, plus, B, C } = equation;
      const coefficientA = parseFloat(AX);
      const coefficientB = parseFloat(B);
      const constantC = parseFloat(C);

      if (isNaN(coefficientA) || isNaN(coefficientB) || isNaN(constantC)) {
        setError(
          "Veuillez entrer des valeurs numériques valides pour l'équation."
        );
        return;
      }

      if (plus === "+" || plus === "-" || plus === "*" || plus === "/") {
        setError(""); // Clear previous error if any
        let result;

        switch (plus) {
          case "+":
            result = (constantC - coefficientB) / coefficientA;
            setResults([result]);
            break;
          case "-":
            result = (constantC + coefficientB) / coefficientA;
            setResults([result]);
            break;
          case "*":
            result = constantC / coefficientB / coefficientA;
            setResults([result]);
            break;
          case "/":
            if (coefficientB === 0) {
              setError(
                "Le coefficient B ne peut pas être zéro pour une division."
              );
              setResults([]);
            } else {
              result = (constantC * coefficientB) / coefficientA;
              setResults([result]);
            }
            break;
          default:
            setError("Opérateur invalide.");
            setResults([]);
            break;
        }
      } else {
        setError("Opérateur invalide.");
        setResults([]);
      }
    } else if (equationType === "second") {
      const { A, B, C, sign1, sign2 } = equation;
      const coefficientA = parseFloat(A);
      const coefficientB = parseFloat(B);
      const coefficientC = parseFloat(C);

      let adjustedCoefficientB = coefficientB;
      if (sign1 === "-") {
        adjustedCoefficientB = -adjustedCoefficientB;
      }
      if (sign2 === "-") {
        adjustedCoefficientB = -adjustedCoefficientB;
      }

      if (coefficientA === 0) {
        setError("Le coefficient 'A' ne peut pas être égal à zéro.");
        return;
      }

      const discriminant =
        adjustedCoefficientB ** 2 - 4 * coefficientA * coefficientC;
      setDelta(discriminant);

      if (discriminant > 0) {
        const root1 =
          (-adjustedCoefficientB + Math.sqrt(discriminant)) /
          (2 * coefficientA);
        const root2 =
          (-adjustedCoefficientB - Math.sqrt(discriminant)) /
          (2 * coefficientA);
        setResults([root1, root2]);
      } else if (discriminant === 0) {
        const root = -adjustedCoefficientB / (2 * coefficientA);
        setResults([root]);
      } else {
        setResults([]);
      }
    }
  };

  const resetEquation = () => {
    setEquation(initialEquationState.equation);
    setResults(initialEquationState.results);
    setDelta(initialEquationState.delta);
    setError("");
  };

  return (
    <div>
      <h1>Résolveur d'Équations</h1>
      <div className="main">
        <Choix setEquationType={setEquationType} />
        {equationType && (
          <div>
            <Equation
              equationType={equationType}
              equation={equation}
              setEquation={setEquation}
              setError={setError}
            />
            <Bouton solveEquation={solveEquation} />
            <Resultat
              equationType={equationType}
              results={results}
              delta={delta}
            />
            <button onClick={resetEquation}>Réinitialiser</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

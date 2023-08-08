import React, { useState } from "react";

function Equation({ equationType, equation, setEquation }) {
  const [error, setError] = useState("");

  const handleTermChange = (term, e) => {
    setEquation({ ...equation, [term]: e.target.value });
  };

  const validateInput = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      setError("Veuillez entrer un nombre valide.");
    } else {
      setError("");
      handleTermChange(e.target.name, e);
    }
  };

  return (
    <div>
      <label>Entrez l'équation :</label>
      <div>
        {equationType === "premier" ? (
          <>
            <input
              type="text"
              value={equation.AX || ""}
              name="AX"
              placeholder="AX"
              onChange={validateInput}
            />
            <select onChange={(e) => handleTermChange("plus", e)}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
            <input
              type="text"
              value={equation.B || ""}
              name="B"
              placeholder="B"
              onChange={validateInput}
            />
            <select onChange={(e) => handleTermChange("equals", e)}>
              <option value="=">=</option>
            </select>
            <input
              type="text"
              value={equation.C || ""}
              name="C"
              placeholder="C"
              onChange={validateInput}
            />
          </>
        ) : (
          <>
            <input
              type="text"
              value={equation.A || ""}
              name="A"
              placeholder="A"
              onChange={validateInput}
            />
            <span>X²</span>
            <select onChange={(e) => handleTermChange("plus", e)}>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <input
              type="text"
              value={equation.B || ""}
              name="B"
              placeholder="B"
              onChange={validateInput}
            />
            <span>X</span>
            <select onChange={(e) => handleTermChange("plus", e)}>
              <option value="+">+</option>
              <option value="-">-</option>
            </select>
            <input
              type="text"
              value={equation.C || ""}
              name="C"
              placeholder="C"
              onChange={validateInput}
            />
            <span>= 0</span>
          </>
        )}
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Equation;

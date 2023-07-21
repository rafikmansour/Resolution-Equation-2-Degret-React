import React, { useState } from "react";

const QuadraticEquationSolver = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [solution, setSolution] = useState(null);

  // Fonction pour résoudre l'équation du 2e degré
  const solveEquation = () => {
    // Convertir les coefficients en nombres
    const coeffA = parseFloat(a);
    const coeffB = parseFloat(b);
    const coeffC = parseFloat(c);

    // Vérifier que les coefficients sont des nombres valides
    if (isNaN(coeffA) || isNaN(coeffB) || isNaN(coeffC)) {
      setSolution("Veuillez saisir des coefficients valides.");
      return;
    }

    // Calculer le discriminant
    const discriminant = coeffB * coeffB - 4 * coeffA * coeffC;

    // Calculer les solutions
    if (discriminant > 0) {
      const root1 = (-coeffB + Math.sqrt(discriminant)) / (2 * coeffA);
      const root2 = (-coeffB - Math.sqrt(discriminant)) / (2 * coeffA);
      setSolution(`Solutions : x₁ = ${root1}, x₂ = ${root2}`);
    } else if (discriminant === 0) {
      const root = -coeffB / (2 * coeffA);
      setSolution(`Solution unique : x = ${root}`);
    } else {
      setSolution("Pas de solution réelle.");
    }
  };

  // Gérer le changement des coefficients
  const handleAChange = (e) => {
    setA(e.target.value);
  };

  const handleBChange = (e) => {
    setB(e.target.value);
  };

  const handleCChange = (e) => {
    setC(e.target.value);
  };

  // Gérer la soumission du formulaire pour résoudre l'équation
  const handleSubmit = (e) => {
    e.preventDefault();
    solveEquation();
  };

  return (
    <div>
      <h2>Résolveur d'équation du 2e degré</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Coefficient a :
          <input type="text" value={a} onChange={handleAChange} />
        </label>
        <label>
          Coefficient b :
          <input type="text" value={b} onChange={handleBChange} />
        </label>
        <label>
          Coefficient c :
          <input type="text" value={c} onChange={handleCChange} />
        </label>
        <button type="submit">Résoudre</button>
      </form>
      {solution && <div>{solution}</div>}
    </div>
  );
};

export default QuadraticEquationSolver;

import React from "react";

const Input = () => {
  return (
    // Trochę niebezpieczne jest przypisywanie takiego `id` i `type=number` tutaj,
    // Bo jeśli użyjesz ich kilka razy to formularze mogą "zgłupieć" mając wiele inputów z takimi samymi ID (HTML tego nie lubi)
    <input
      id="grams"
      type="number"
      placeholder="Grams"
      className="grams__input"
    />
  );
};
export default Input;

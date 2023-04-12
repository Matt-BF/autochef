"use client";

import { useState } from "react";
import { BinIcon } from "./components/BinIcon";

export default function TestForm() {
  const [inputValues, setInputValues] = useState<string[]>([""]);

  const handleInputChange = (event, index) => {
    const newValue = event.target.value;
    setInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      updatedInputValues[index] = newValue;
      return updatedInputValues;
    });
  };

  const handleAddInput = () => {
    setInputValues((prevInputValues) => [...prevInputValues, ""]);
  };

  const handleRemoveInput = (indexToRemove) => {
    if (indexToRemove === 0) {
      return; // prevent removing the first input element
    }
    setInputValues((prevInputValues) =>
      prevInputValues.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSubmit = () => {
    setInputValues(inputValues.filter((inputValue) => inputValue !== ""));
    console.log(inputValues);
  };

  return (
    <div className="flex flex-col gap-5">
      {inputValues.map((inputValue, index) => (
        <div className="flex justify-between" key={index}>
          <input
            className="w-4/5 rounded-md p-2 outline-none focus:ring-2 focus:ring-emerald-600"
            type="text"
            value={inputValue}
            onChange={(event) => handleInputChange(event, index)}
          />
          {index !== 0 && (
            <button onClick={() => handleRemoveInput(index)}>
              <BinIcon />
            </button>
          )}
        </div>
      ))}
      <button
        onClick={handleAddInput}
        className="rounded-md border border-emerald-400 bg-white p-3 transition  hover:bg-emerald-300"
      >
        Adicionar Ingrediente
      </button>
      <button
        onClick={handleSubmit}
        className="rounded-md border border-emerald-400 bg-white p-3 transition  hover:bg-emerald-300"
      >
        Buscar receitas
      </button>
    </div>
  );
}

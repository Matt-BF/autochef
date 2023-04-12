"use client";
import { useState } from "react";
import AppliancesCheckbox from "./components/AppliancesCheckbox";

export default function IngredientForm() {
  const appliances = [
    "Fogão",
    "Forno",
    "Liquidificador",
    "Microondas",
    "Churrasqueira",
    "Panela de pressão",
  ];
  const [ingredients, setIngredients] = useState("");
  const [usage, setUsage] = useState<"full" | "optimum">("full");
  const [appliancesInHouse, setAppliancesInHouse] = useState<string[]>([]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const instructions = {
      ingredientes: ingredients,
      uso: usage,
      aparelhos: appliancesInHouse.join(","),
    };
    console.log(instructions);
  };

  const handleCheckboxChange = (applianceName: string, isChecked: boolean) => {
    if (isChecked) {
      setAppliancesInHouse([...appliancesInHouse, applianceName]);
    } else {
      setAppliancesInHouse(
        appliancesInHouse.filter((name) => name !== applianceName)
      );
    }
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={onSubmit}>
      {/* first input */}
      <div>
        <div className="mb-5 flex items-center">
          <span className="mr-5 h-10 w-10 rounded-full bg-emerald-500 p-2 text-center text-white">
            1
          </span>
          Quais ingredientes você tem em casa?
        </div>
        <input
          className="w-full rounded-md border border-slate-300 p-2 outline-none focus:border-transparent focus:ring-2 focus:ring-emerald-600"
          type="text"
          placeholder="ex: frango, arroz, cenoura"
          onChange={(e) => setIngredients(e.target.value)}
        />
      </div>

      {/* second input */}
      <div>
        <div className="mb-5 flex items-center">
          <span className="mr-5 h-10 w-10 rounded-full bg-emerald-500 p-2 text-center text-white">
            2
          </span>
          Como o chef deve utilizar os ingredientes?
        </div>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="full"
              name="usage"
              value="full"
              className="peer hidden"
              required
            />
            <label
              htmlFor="full"
              onClick={() => setUsage("full")}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-white p-5  hover:bg-gray-100 hover:text-gray-600 peer-checked:border-emerald-400"
            >
              <div>
                <h3 className="mb-3 text-center">
                  Utilizar todos os ingredientes
                </h3>
                <p className="max-w-sm">
                  O auto chef irá criar uma receita com todos os ingredientes
                  que você adicionou no passo 1
                </p>
              </div>
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="optimum"
              name="usage"
              value="optimum"
              className="peer hidden"
              required
            />
            <label
              htmlFor="optimum"
              onClick={() => setUsage("optimum")}
              className="flex w-full cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-white p-5  hover:bg-gray-100 hover:text-gray-600 peer-checked:border-emerald-400"
            >
              <div>
                <h3 className="mb-3 text-center">Otimizar os ingredientes</h3>
                <p className="max-w-sm">
                  O auto chef irá criar uma receita com os melhores ingredientes
                </p>
              </div>
            </label>
          </li>
        </ul>
      </div>

      {/* third input */}
      <div>
        <div className="mb-5 flex items-center">
          <span className="mr-5 h-10 w-10 rounded-full bg-emerald-500 p-2 text-center text-white">
            3
          </span>
          <span className="text-xl font-bold text-emerald-800">
            Quais aparelhos você possui para cozinhar?
          </span>
        </div>
        <div className="mx-10 grid grid-cols-3 gap-5">
          {appliances.map((appliance) => (
            <AppliancesCheckbox
              key={appliance}
              applianceName={appliance}
              onChange={handleCheckboxChange}
            />
          ))}
        </div>
      </div>

      {/* send! */}
      <button
        className="w-3/4 self-center rounded-md border border-emerald-500 p-5 text-center"
        type="submit"
      >
        Gerar receita 🍴
      </button>
    </form>
  );
}

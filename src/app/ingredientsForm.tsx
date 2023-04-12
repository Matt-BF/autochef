import { useState } from "react";

export default function IngredientForm() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  <form className="flex gap-2">
    <input
      className="w-full p-5 outline-none focus:ring-2 focus:ring-emerald-900"
      type="text"
      placeholder="ex: frango, arroz, cenoura"
      onChange={(e) => setIngredients([...ingredients, e.target.value])}
    />
  </form>;
}

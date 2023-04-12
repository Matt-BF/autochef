import TestForm from "./TestForm";
import Image from "next/image";
import ingredientsImage from "./images/ingredients.jpg";

export default function Home() {
  return (
    <>
      <div className="relative h-64">
        <Image
          src={ingredientsImage}
          alt="Ingredientes"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <main className="flex flex-col items-center justify-center gap-10 py-24">
        <h1 className="text-6xl font-bold">Auto Chef</h1>
        <p>Descubra receitas com o que você tem na geladeira ou despensa!</p>

        <div className="flex flex-col gap-5 rounded-md border-2 border-emerald-700 bg-slate-100 p-5">
          <h2>Coloque os ingredientes que você possui em casa</h2>
          <TestForm />
        </div>
      </main>
    </>
  );
}

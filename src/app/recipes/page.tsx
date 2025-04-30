import Link from "next/link";

export default async function Recipes() {
  const data = await fetch("https://dummyjson.com/recipes")
  const {recipes} = await data.json();

  return (
    <div>
      <header className="mb-4">
        <h1>Recipes</h1>
        <p>List of recipes will go here.</p>
      </header>
      <div>
        <ul>
          {recipes.map((recipe: {id:number, name:string, ingredients: string, instructions: string}) => (
            <li key={recipe.id}>
              <Link href={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
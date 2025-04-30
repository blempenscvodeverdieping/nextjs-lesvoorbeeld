export default async function Recipe({params}: { params: { id: number } }) {
  const data = await fetch(`https://dummyjson.com/recipes/${params.id}`);
  const recipe = await data.json();
  
  return (
    <div>
      <h1>Recipe: {recipe.name}</h1>
      <p>Recipe details will go here.</p>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient: string, index: number) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Instructions</h2>
        <ul>
          {recipe.instructions.map((instruction: string, index: number) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
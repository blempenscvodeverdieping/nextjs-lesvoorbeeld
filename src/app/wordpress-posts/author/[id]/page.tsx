export default async function Author({params}: {params: {id: number}}) {
  const authordata = await fetch(`http://wordpress.test/wp-json/wp/v2/users/${params.id}`)
  const author = await authordata.json()

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.description}</p>
      {author.url && <p>Website: {author.url}</p>}
    </div>
  )
}
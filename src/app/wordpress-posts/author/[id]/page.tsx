export default async function Author({params}: {params: Promise<{id: number}>}) {

  const {id} = await params
  const authordata = await fetch(`http://wordpress.test/wp-json/wp/v2/users/${id}`)
  const author = await authordata.json()

  return (
    <div>
      <h1>{author.name}</h1>
      <p>{author.description}</p>
      {author.url && <p>Website: {author.url}</p>}
    </div>
  )
}
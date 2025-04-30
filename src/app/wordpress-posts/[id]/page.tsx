import Link from "next/link"

export default async function WordpressPost({params}: {params: Promise<{id: number}>}) {
  const {id} = await params
  const data = await fetch(`http://wordpress.test/wp-json/wp/v2/posts/${id}`)
  const post = await data.json()

  const authordata = await fetch(`http://wordpress.test/wp-json/wp/v2/users/${post.author}`)
  const author = await authordata.json()

  return (
    <div>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <p>Published on: {new Date(post.date).toLocaleDateString()}</p>
      <p>Author: <Link href={`/wordpress-posts/author/${author.id}`}>{author.name}</Link></p>
      <p>Categories: {post.categories}</p>
    </div>
  )
}
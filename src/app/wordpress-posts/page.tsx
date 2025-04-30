import Link from "next/link"

export default async function WordpressPosts() {
  const data = await fetch("http://wordpress.test/wp-json/wp/v2/posts")
  const posts = await data.json()

  return (
    <div>
      <h1>Wordpress Posts</h1>
      <p>This is a list of posts from Wordpress.</p>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <h2>{post.title.rendered}</h2>
            <p>{post.excerpt.rendered}</p>
            <Link href={`/wordpress-posts/${post.id}`}>
              Read more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
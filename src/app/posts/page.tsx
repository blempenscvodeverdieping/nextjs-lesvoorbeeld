import Link from "next/link";

export default async function Posts() {
  const data = await fetch("http://inertia-les.test/api/posts")
  const posts = await data.json()

  return (
    <div>
      <header className="mb-4">
        <h1>Posts</h1>
        <p>This is the posts page.</p>
        <Link href="/posts/create" className="btn btn-primary">
          Create Post
        </Link>
      </header>

      <ul>
        {posts.map((post: {id:number, title:string, content: string}) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
import { verifySession } from "@/lib/dal";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function Post({params}: { params: { id: number } }) {
  const data = await fetch(`http://inertia-les.test/api/posts/${params.id}`)
  const post = await data.json();

  const session = await verifySession();

  async function deletePost() {
    'use server';
    
    const session = await verifySession();
    
    if (!session) {
      throw new Error("Unauthorized");
    }
    
    await fetch(`http://inertia-les.test/api/posts/${params.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${session.userId}`,
      },
    });

    revalidatePath('/posts');
    redirect('/posts');
  }

  return (
    <div>
      <h1>Post: {post.title}</h1>
      {session && session.isAuth && (
        <div>
          <form action={deletePost}>
            <button type="submit">Delete post</button>
          </form>
        </div>
      )}
      <div>
        {post.content}
      </div>
    </div>
  );
}
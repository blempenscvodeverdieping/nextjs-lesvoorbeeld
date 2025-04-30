import { verifySession } from "@/lib/dal";
import { revalidatePath } from "next/cache";
import { redirect } from 'next/navigation'

export default function CreatePost() {

  async function createPost(formData: FormData) {
    "use server"

    const title = formData.get("title")
    const content = formData.get("content")

    const session = await verifySession();

    if (!session) {
      throw new Error("Unauthorized")
    }

    const response = await fetch("http://inertia-les.test/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        content,
      }),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${session.userId}`,
      },
    })

    if (!response.ok) {
      throw new Error("Failed to create post")
    }

    revalidatePath('/posts')
    redirect("/posts")
  }


  return (
    <div>
      <h1>Create post</h1>

      <form action={createPost}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content"></textarea>
        </div>

        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}
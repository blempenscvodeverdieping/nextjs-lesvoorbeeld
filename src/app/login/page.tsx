import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"

export default function Login() {

  async function handleLogin(formData: FormData) {
    "use server"

    const email = formData.get('email')
    const password = formData.get('password')
    const res = await fetch('http://inertia-les.test/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })

    if (!res.ok) {
      console.log('Login failed')
      return
    }

    const data = await res.json()
    await createSession(data.token)
    redirect('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <form action={handleLogin}>
        <input type="text" name="email" placeholder="E-mail" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
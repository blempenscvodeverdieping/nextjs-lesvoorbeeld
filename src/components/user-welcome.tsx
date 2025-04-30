import { verifySession } from "@/lib/dal";

export default async function UserWelcome() {
  const session = await verifySession();

  if (!session) {
    return null;
  }

  const data = await fetch('http://inertia-les.test/api/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${session.userId}`,
    },
  })

  const user = await data.json();

  return (
    <p>Welkom, {user.name}.</p>
  )
}
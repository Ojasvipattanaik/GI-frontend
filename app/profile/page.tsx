// app/profile/page.tsx

import { getUser } from '../../services/auth'

export default async function ProfilePage() {
  const user = await getUser()

  return (
    <section className="container">
      <h1>My profile</h1>

      <form className="form">
        <label>Full name</label>
        <input value={user.name} readOnly />

        <label>Date registered</label>
        <input value={user.registered} readOnly />

        <label>Membership ID</label>
        <input value={user.memberId} readOnly />
        <label>My projects</label>
        <input value={user.projects} readOnly />
        <button style={{ background: 'red' }}>Sign out</button>
      </form>
    </section>
  )
}

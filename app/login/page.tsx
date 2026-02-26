// app/login/page.tsx

'use client'

export default function LoginPage() {
  return (
    <section className="container">
      <h1>Login</h1>

      <form className="form">
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </form>
    </section>
  )
}

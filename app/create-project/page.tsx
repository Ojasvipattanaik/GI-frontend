// app/create-project/page.tsx

export default function CreateProject() {
  return (
    <section className="container">
      <h1>New Project</h1>

      <form className="form">
        <label>Project name</label>
        <input />

        <label>Project description</label>
        <textarea />

        <label>Location</label>
        <input />

        <label>Tech Stack</label>
        <input placeholder="Java, C++, Python" />

        <button >Create</button>
      </form>
    </section>
  )
}

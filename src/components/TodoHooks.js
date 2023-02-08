import { useRef, useState } from "react"

const TodoHooks = () => {
  const jobRef = useRef()
  const [jobs, setJobs] = useState(() => {
    //get saved jobs from local storage
    const storageJobs = JSON.parse(localStorage.getItem("jobs_hooks"))
    return storageJobs ?? []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const job = jobRef.current.value
    if (job === "") return

    setJobs((prev) => {
      const newJobs = [...prev, job]
      //save to local storage
      const jsonJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs_hooks", jsonJobs)

      return newJobs
    })

    jobRef.current.value = ""
  }

  const handleDelete = (index) => {
    const newJobs = [...jobs]
    newJobs.splice(index, 1)
    setJobs(newJobs)
  }

  return (
    <div>
      <h1>Todo with Function Component(Hooks)</h1>
      <form onSubmit={handleSubmit}>
        <input ref={jobRef} />
        <button type="submit" className="btn btn-6 btn-6d">
          Add
        </button>
      </form>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <button className="btn btn-6 btn-6d" onClick={handleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoHooks

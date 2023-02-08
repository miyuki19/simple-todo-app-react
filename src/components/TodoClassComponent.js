import { Component } from "react"

class TodoClassComponent extends Component {
  constructor(props) {
    super(props)
    const storageJobs = JSON.parse(localStorage.getItem("jobs_class"))
    this.state = {
      jobs: storageJobs ?? [],
      currentJob: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(event) {
    this.setState({
      currentJob: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const newJobs = [...this.state.jobs, this.state.currentJob]
    //save to local storage
    const jsonJobs = JSON.stringify(newJobs)
    localStorage.setItem("jobs_class", jsonJobs)
    this.setState({
      jobs: newJobs,
      currentJob: "",
    })
  }

  handleDelete(index) {
    const newJobs = [...this.state.jobs]
    newJobs.splice(index, 1)
    this.setState({
      jobs: newJobs,
    })
  }

  render() {
    return (
      <div>
        <h1>Todo with Class Component</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentJob}
            onChange={this.handleChange}
          />
          <button className="btn btn-6 btn-6d" type="submit">
            Add
          </button>
        </form>

        <ul>
          {this.state.jobs.map((job, index) => (
            <li key={index}>
              {job}
              <button
                className="btn btn-6 btn-6d"
                onClick={() => this.handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoClassComponent

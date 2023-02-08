import "./App.css"
import TodoHooks from "./components/TodoHooks"
import TodoClassComponent from "./components/TodoClassComponent"

function App() {
  return (
    <div>
      <div className="column__component">
        <div className="tdl__holder">
          <TodoHooks />
        </div>
      </div>
      <div className="column__component">
        <div className="tdl__holder">
          <TodoClassComponent />
        </div>
      </div>
    </div>
  )
}

export default App

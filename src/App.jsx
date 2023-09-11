import './css/App.css'
import Navbar from './components/Navbar'
import NewTask from './components/NewTask'

function App() {
  return (
    <>
      <Navbar/>
      <h1>ToDo List</h1>
      <NewTask/>
    </>
  )
}

export default App

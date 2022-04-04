import './App.css'
import Character from './components/Character'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          <Character />
        </ul>
      </main>
      <NavBar />
    </div>
  )
}

export default App

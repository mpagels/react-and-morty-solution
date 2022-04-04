import './App.css'

function App() {
  return (
    <div className="App">
      <header>React and Morty</header>
      <main>
        <ul>
          <li>
            <img
              src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
              alt="rick-and-morty-character"
            />
            <h2>Morty Smith</h2>
            <button>show more</button>
          </li>
        </ul>
      </main>
      <footer>
        <nav>
          <ul>
            <li>Homepage</li>
            <li>Favorite</li>
            <li>Random</li>
            <li>Other</li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App

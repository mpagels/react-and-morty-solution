import React from 'react'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>

          <li>
            <Link to="/favorites">Favorite</Link>
          </li>
          <Link to="/random">Random</Link>
          <li>Other</li>
        </ul>
      </nav>
    </footer>
  )
}

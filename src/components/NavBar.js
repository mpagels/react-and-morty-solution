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
          <li>Random</li>
          <li>Other</li>
        </ul>
      </nav>
    </footer>
  )
}

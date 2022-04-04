import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <FooterWrapper>
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
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  & nav > ul {
    display: flex;
    justify-content: space-between;
  }
`

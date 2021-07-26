import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/">
          <h2>Carousel</h2>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

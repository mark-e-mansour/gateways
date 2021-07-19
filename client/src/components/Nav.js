import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav (props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark justify-content-center">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' exact activeClassName='active' className="nav-link">
            Dashboad
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/new' activeClassName='active' className="nav-link">
            New Gateway
          </NavLink>
        </li>
      </ul>
      </nav>
  )
}
import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div class="container-fluid nav_bg">
          <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-md">
                <Link to="/home" class="navbar-brand" >
                  <p>CoviGuard</p>
                </Link>
              </div>
            </nav>
          </div>
        </div>
    </>
  )
}

export default Navbar
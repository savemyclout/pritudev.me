import React from 'react'
import { Link } from 'gatsby'
import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import Image from 'gatsby-image'
import brandLogo from './svgs/brand.svg'

const Navbar = () => {
  const { title } = useSiteMeta()
  return (
    <nav className="navbar">
      <div className="container">
        {/* PritDev.me */}
        <div id="text-in-code">
          <a href="/" id="brand_logo_link">
            <img id="brand_logo" src={brandLogo} />
          </a>
        </div>
        <ul class="nav-ul">
          <li>
            <Link to="/posts" className="link">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/courses" className="link">
              Courses
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li> */}
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

import React from 'react'
import { Link } from 'gatsby'
import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

import brandLogo from './svgs/brand.svg'

const Navbar = () => {
  const { title } = useSiteMeta()
  return (
    <nav className="navbar">
      <div className="container">
        {/* PritDev.me */}
        <div id="main-brand">
          <a href="/" id="brand_logo_link">
            <img id="brand_logo" src={brandLogo} alt="Pritu Dev" />
            {/* P R I T */}
          </a>
        </div>
        <ul class="nav-ul">
          <li>
            <Link rel="noopener" to="/blogs" className="link">
              <span className="hover-text">Blogs</span>
            </Link>
          </li>
          <li>
            <AnchorLink rel="noopener" to="/#projects" className="link">
              <span className="hover-text">Projects</span>
            </AnchorLink>
          </li>

          <li>
            <Link rel="noopener" to="/contact" className="link">
              <span className="hover-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

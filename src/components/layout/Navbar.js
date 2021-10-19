import React from 'react'
import { Link } from 'gatsby'
import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import brandLogo from './svgs/brand.svg'

const Navbar = () => {
  const { title } = useSiteMeta()
  return (
    <nav id="scrollTo" className="navbar">
      <div className="container">
        {/* PritDev.me */}
        <div id="main-brand">
          <Link to="/" id="brand_logo_link">
            <img id="brand_logo" src={brandLogo} alt="Pritu Dev" />
            {/* P R I T */}
          </Link>
        </div>
        <ul className="nav-ul">
          <li>
            <Link rel="noopener" to="/articles" className="link">
              <span className="hover-text">Articles</span>
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

import React from 'react'
import { Link } from 'gatsby'
import { useSiteMeta } from '../../utils/hooks/useSiteMeta'
import Image from 'gatsby-image'
import brandLogo from './svgs/brand.svg'
import blogSvg from './svgs/nav-svgs/blog.svg'
import contactSvg from './svgs/nav-svgs/contact.svg'
import coursesSvg from './svgs/nav-svgs/courses.svg'
import projectsSvg from './svgs/nav-svgs/projects.svg'

const Navbar = () => {
  const { title } = useSiteMeta()
  return (
    <nav className="navbar">
      <div className="container">
        {/* PritDev.me */}
        <div id="main-brand">
          <a href="/" id="brand_logo_link">
            <img id="brand_logo" src={brandLogo} alt="brand" />
          </a>
        </div>
        <ul class="nav-ul">
          <li>
            <Link rel="noopener" to="/posts" className="link">
              <img className="nav-svgs" src={blogSvg} alt="blog" />
              <br />
              <span className="hover-text">Blogs</span>
            </Link>
          </li>
          <li>
            <Link rel="noopener" to="/courses" className="link">
              <img className="nav-svgs" src={coursesSvg} alt="courses" />
              <br />
              <span className="hover-text">Courses</span>
            </Link>
          </li>
          <li>
            <Link rel="noopener" to="/works" className="link">
              <img className="nav-svgs" src={projectsSvg} alt="projects" />
              <br />
              <span className="hover-text">Projects</span>
            </Link>
          </li>
          <li>
            <Link rel="noopener" to="/contact" className="link">
              <img className="nav-svgs" src={contactSvg} alt="contact" />
              <br />
              <span className="hover-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

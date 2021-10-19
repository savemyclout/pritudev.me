import { Link } from 'gatsby'
import React from 'react'
import linkLogo from './svgs/link-open.svg'
import githubLogo from './svgs/github-projects.svg'

const Projects = () => {
  return (
    <div id="projects">
      <br />
      <div className="container post-container">
        {/* Project 1 */}
        <div className="post">
          <div className="post-content">
            <h2 className="post-header">The Portfolio</h2>
            <p>
              My personal website running on Gatsby, React, and Node.js. The
              potfolio or personal website whatever you say it!
            </p>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://pritudev.me"
            >
              <img src={linkLogo} alt="open live preview" target="_blank" />
              ‎‎‎‎&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://github.com/pritudev/pritudev.me"
            >
              &nbsp;&nbsp;
              <img src={githubLogo} alt="source code" target="_blank" />
            </Link>
          </div>
        </div>
        {/* Project 2 */}
        <div className="post">
          <div className="post-content">
            <h2 className="post-header">Typefiddle</h2>
            <p>
              Another typing test website. Typefiddle is a minimalistic typing
              test website with a history of your test. and with various
              languages.
            </p>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://typefiddle.pritudev.me"
            >
              <img src={linkLogo} alt="open live preview" target="_blank" />
              ‎‎‎‎&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://github.com/pritudev/typingFiddle"
            >
              &nbsp;&nbsp;
              <img src={githubLogo} alt="source code" target="_blank" />
            </Link>
          </div>
        </div>
        {/* Project 3 */}
        <div className="post">
          <div className="post-content">
            <h2 className="post-header">Jarvis AI</h2>
            <p>
              Jarvis is a Personal Assistant which can help you to manage some
              stuff in your system, Also can do so many other tasks.
            </p>
            {/* <Link rel="noopener" className="link-read-more" to="https://typefiddle.vercel.app">
            <img src={linkLogo}  target="_blank"/>‎‎‎‎&nbsp;&nbsp;&nbsp;
          </Link> */}
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://github.com/pritudev/Jarvis"
            >
              &nbsp;&nbsp;
              <img src={githubLogo} alt="source code" target="_blank" />
            </Link>
          </div>
        </div>
        {/* Project 4 */}
        <div className="post">
          <div className="post-content">
            <h2 className="post-header">Pritudev Theme</h2>
            <p>
              Amazing Theme For VS Code Created By Pritudev for his personal
              use, Dark yet Beautiful Theme Check out now it's amazing!.
            </p>
            <Link
              rel="noopener"
              className="link-read-more"
              target="_blank"
              to="https://marketplace.visualstudio.com/items?itemName=Pritudev.pritu-dark-theme"
            >
              <img src={linkLogo} alt="open live preview" target="_blank" />
              ‎‎‎‎&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://github.com/pritudev/pritu-dark-theme"
            >
              &nbsp;&nbsp;
              <img src={githubLogo} alt="source code" target="_blank" />
            </Link>
          </div>
        </div>
        {/* Project 5 */}
        <div className="post">
          <div className="post-content">
            <h2 className="post-header">Create-Webdev-App</h2>
            <p>
              Powerful command-line interface to generate a web developer
              starter app in few seconds. You can change things and files as you
              wish
            </p>
            <Link
              rel="noopener"
              className="link-read-more"
              target="_blank"
              to="https://www.npmjs.com/package/create-webdev-app"
            >
              <img src={linkLogo} alt="open live preview" target="_blank" />
              ‎‎‎‎&nbsp;&nbsp;&nbsp;
            </Link>
            <Link
              rel="noopener"
              target="_blank"
              className="link-read-more"
              to="https://github.com/pritudev/create-webdev-app"
            >
              &nbsp;&nbsp;
              <img src={githubLogo} alt="source code" target="_blank" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

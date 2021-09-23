import { Link } from 'gatsby'
import React from 'react'

const Projects = () => {
  return (
    <div className="container post-container">
      {/* Project 1 */}
      <div className="post">
        <div className="post-content">
          <h2>The Portfolio</h2>
          <p>
            💾 My personal website running on Gatsby, React, and Node.js. The
            potfolio or personal website whatever you say it!
          </p>
          <Link
            target="_blank"
            className="link-read-more"
            to="https://pritudev.me"
          >
            Live Preview‎‎‎‎&nbsp;&nbsp;|
          </Link>
          <Link
            target="_blank"
            className="link-read-more"
            to="https://github.com/pritudev/pritudev.me"
          >
            &nbsp;&nbsp;Source Code
          </Link>
        </div>
      </div>
      {/* Project 2 */}
      <div className="post">
        <div className="post-content">
          <h2>Typefiddle</h2>
          <p>
            ⌨️ Another typing test website. Typefiddle is a minimalistic typing
            test website with a history of your test.
          </p>
          <Link
            target="_blank"
            className="link-read-more"
            to="https://typefiddle.vercel.app"
          >
            Live Preview‎‎‎‎&nbsp;&nbsp;|
          </Link>
          <Link
            target="_blank"
            className="link-read-more"
            to="https://github.com/pritudev/typingFiddle"
          >
            &nbsp;&nbsp;Source Code
          </Link>
        </div>
      </div>
      {/* Project 3 */}
      <div className="post">
        <div className="post-content">
          <h2>Jarvis AI</h2>
          <p>
            🤖 Jarvis is a Personal Assistant which can help you to manage some
            stuff in your system, Also can do so many other tasks.
          </p>
          {/* <Link className="link-read-more" to="https://typefiddle.vercel.app">
            Live Preview‎‎‎‎&nbsp;&nbsp;|
          </Link> */}
          <Link
            target="_blank"
            className="link-read-more"
            to="https://github.com/pritudev/Jarvis"
          >
            &nbsp;&nbsp;Source Code
          </Link>
        </div>
      </div>
      {/* Project 4 */}
      <div className="post">
        <div className="post-content">
          <h2>Pritudev Theme</h2>
          <p>
            🎨 Amazing Theme For VS Code Created By Pritudev for his personal
            use, Dark yet Beautiful Theme Check out! Now!.
          </p>
          <Link
            className="link-read-more"
            target="_blank"
            to="https://marketplace.visualstudio.com/items?itemName=Pritudev.pritu-dark-theme"
          >
            Download Now‎‎‎‎&nbsp;&nbsp;|
          </Link>
          <Link
            target="_blank"
            className="link-read-more"
            to="https://github.com/pritudev/pritu-dark-theme"
          >
            &nbsp;&nbsp;Source Code
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projects

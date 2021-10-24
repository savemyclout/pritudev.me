import { Link } from 'gatsby'
import React from 'react'
import linkLogo from './svgs/link-open.svg'
import githubLogo from './svgs/github-projects.svg'

const Projects = () => {
  return (
    <div id="projects">
      <br />
      <div id="projects-container" className="container post-container">
        {/* Project 1 */}
        <a href="https://github.com/pritudev/pritudev.me" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=pritudev.me"></img>
            </div>
          </div>
        </a>
        {/* Project 2 */}
        <a href="https://github.com/pritudev/create-webdev-app" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=create-webdev-app"></img>
            </div>
          </div>
        </a>
        {/* Project 3 */}
        <a href="https://github.com/pritudev/pritu-dark-theme" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=pritu-dark-theme"></img>
            </div>
          </div>
        </a>
        {/* Project 4 */}
        <a href="https://github.com/pritudev/Typefiddle-v2" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=Typefiddle-v2"></img>
            </div>
          </div>
        </a>
        {/* Project 5 */}
        <a href="https://github.com/pritudev/jarvis" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=jarvis"></img>
            </div>
          </div>
        </a>
        {/* Project 5 */}
        <a href="https://github.com/pritudev/vinlybot" target="_blank">
          <div className="post">
            <div className="post-content">
              <img src="https://github-readme-stats.vercel.app/api/pin/?username=pritudev&repo=vinlybot"></img>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Projects

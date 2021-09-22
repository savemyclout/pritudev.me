import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.scss'
import Image from 'gatsby-image'
import Layout from './Layout'
import Courses from './Courses'
import About from './About'

const Showcase = ({ data }) => {
  const [followers, setFollowers] = useState(0)

  useEffect(() => {
    async function getGithubAPI() {
      const response = await fetch('https://api.github.com/users/pritudev')
      const data = await response.json()

      return data
    }

    getGithubAPI().then((data) => {
      setFollowers(data.followers)
    })
    const fb = document.getElementById('follow-btn')
    const fn = document.getElementById('followers-num')

    if (isNaN(fb)) {
      document.getElementById('follow-btn').innerText = 'Github'
    }
  }, [])
  return (
    <>
      <Wrapper>
        <div className="showcase">
          <div className="container">
            <h1 style={{ fontSize: '3.9em' }}>
              Hey, Everyone <br />
              I'm <span id="gradient-text">Prit.</span>
            </h1>
            <h5 style={{ textAlign: 'left', fontSize: '1.6rem' }}>
              <strong>Full Stack</strong> Web Developer & love to code, expert
              as web developer 🔥💾
            </h5>
            <div className="showcase_buttons" style={{ textAlign: 'center' }}>
              <Link to="https://github.com/pritudev" target="_blank">
                <button id="indigo-btn" to="https://github.com/pritudev">
                  <span id="follow-btn">{Number(followers)}</span>{' '}
                  <span id="followers-num">GitHub followers</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr id="hr-body" />
        <h2 style={{ fontFamily: 'cubano', color: '#6c7983' }}>
          Courses/Videos 👨‍🏫
        </h2>

        {/* Courses Section Starts */}
        <div className="container post-container">
          <div className="post">
            <div className="post-content">
              <Image
                src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="html course"
                className="image"
              />

              <h2>
                <Link
                  to="https://www.youtube.com/watch?v=gVD0EVFQdoA&t"
                  target="_blank"
                  className="link"
                >
                  🔥🔥 Full HTML Course For Absolute Beginners Without Paying a
                  single dollar!
                </Link>
              </h2>
              <p>
                Free yet Amazing HTML 5 Course For absolute Beginners Anyone can
                join and learn HTML Without Giving A single Doller!
              </p>

              <Link
                to="https://www.youtube.com/watch?v=gVD0EVFQdoA&t"
                target="_blank"
                className="link-read-more"
              >
                Check Out on YouTube For Free!
              </Link>
            </div>
          </div>
          <div className="post">
            <div className="post-content">
              <Image
                src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="html course"
                className="image"
              />

              <h2>
                <Link
                  to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
                  target="_blank"
                  className="link"
                >
                  🐱‍🏍 Create A Basic Web Server Using Node Js & Express Js In
                  2021!
                </Link>
              </h2>
              <p>
                Creating a real server is very complex thing but creating a web
                server is very easy thing in 2021 cuz we have some framework
                like express and soo many other..
              </p>

              <Link
                to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
                target="_blank"
                className="link-read-more"
              >
                Check Out on YouTube For Free!
              </Link>
            </div>
          </div>
          <div className="post">
            <div className="post-content">
              <Image
                src="https://images.unsplash.com/photo-1628191081071-a2b761bf21d9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="html course"
                className="image"
              />

              <h2>
                <Link
                  to="https://www.youtube.com/watch?v=hGs3nQI1Tbg&t"
                  target="_blank"
                  className="link"
                >
                  🌙 Create A simple Theme Toggler in youur website using
                  Javascript Easily.
                </Link>
              </h2>
              <p>
                Now we can create a simple dark to light theme and light to dark
                theme toggler in our website using few lines of code in
                javasript.
              </p>

              <Link
                to="https://www.youtube.com/watch?v=hTsqeA-7pEo&t"
                target="_blank"
                className="link-read-more"
              >
                Check Out on YouTube For Free!
              </Link>
            </div>
          </div>

          <Link to="/courses">
            <button id="red-btn">View More Courses...</button>
          </Link>
          {/* </div> */}
        </div>
        {/* Courses Section Ends */}

        <hr id="hr-body" />
        <About />
        {/* <br /> */}
      </Wrapper>
    </>
  )
}

export default Showcase

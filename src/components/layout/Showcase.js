import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.css'
import Image from 'gatsby-image'
import Layout from './Layout.js'
import About from './About.js'
import githubCat from './svgs/github-cat.svg'
import mentor from './svgs/mentor.svg'
import githubCatPixel from './svgs/github-cat-pixel.png'

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
      document.getElementById('follow-btn').innerText = ' '
    }
  }, [])
  return (
    <>
      <Wrapper>
        <div className="showcase">
          <div className="container">
            <h1
              style={{
                fontSize: '7em',
                paddingTop: '5rem',
              }}
            >
              Hi, my name is <span id="gradient-text">PRIT.</span>
            </h1>
            <div className="showcase_buttons" style={{ textAlign: 'center' }}>
              <Link
                rel="noopener"
                to="https://github.com/pritudev"
                target="_blank"
              >
                <button id="indigo-btn" to="https://github.com/pritudev">
                  <span>
                    <img
                      style={{ paddingBottom: '2px' }}
                      height="30px"
                      widht="30px"
                      src={githubCatPixel}
                    />
                  </span>{' '}
                  <span id="follow-btn">{Number(followers)}</span>{' '}
                  <span id="followers-num">GitHub followers</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <hr id="hr-body" />
        <About />
        {/* <br /> */}
      </Wrapper>
    </>
  )
}

export default Showcase

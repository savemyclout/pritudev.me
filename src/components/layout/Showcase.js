import React, { Fragment, useEffect, useState } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.scss'
import Image from 'gatsby-image'
import Layout from './Layout.js'
import About from './About.js'

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
            <h1 style={{ fontSize: '7em' }}>
              I Am <span id="gradient-text">Prit.</span>
            </h1>
            <h3
              style={{
                textAlign: 'center',
                fontSize: '1.5rem',
                fontFamily: 'sofiapro',
              }}
            >
              <strong>Full Stack</strong> Web Developer & love to code, expert
              as web developer 🔥💾
            </h3>
            <div className="showcase_buttons" style={{ textAlign: 'center' }}>
              <Link
                rel="noopener"
                to="https://github.com/pritudev"
                target="_blank"
              >
                <button id="indigo-btn" to="https://github.com/pritudev">
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

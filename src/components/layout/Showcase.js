import React, { Fragment } from 'react'
import Wrapper from './Wrapper'
import { Link } from 'gatsby'
import styles from '../css/BlogPost.module.scss'
import Image from 'gatsby-image'
import Layout from './Layout'
import Courses from './Courses'
import About from './About'

const Showcase = () => {
  return (
    <Wrapper>
      <div className="showcase">
        <div className="container">
          <h1 style={{ fontSize: '3.9em' }}>
            Hey, Everyone <br />
            I'm <span id="gradient-text">Prit.</span>
          </h1>
          <h5 style={{ textAlign: 'left', fontSize: '1.6rem' }}>
            <strong>Full Stack</strong> Developer & Love to code, Expert as web
            developer 🔥💾
          </h5>
          <div className="showcase_buttons" style={{ textAlign: 'center' }}>
            <Link to="https://youtube.com/pritu" target="_blank">
              <button id="red-btn" to="https://youtube.com/pritu">
                YOUTUBE
              </button>
            </Link>
            <Link to="https://discord.io/prituhq" target="_blank">
              <button id="green-btn" to="https://discord.io/prituhq">
                DISCORD
              </button>
            </Link>
          </div>
        </div>
      </div>
      <hr id="hr-body" />
      <h2 style={{ fontFamily: 'cubano', color: '#6c7983' }}>
        Courses/Videos 👨‍🏫
      </h2>

      <Courses />

      {/* Courses Section Ends */}

      <hr id="hr-body" />
      <About />
      {/* <br /> */}
    </Wrapper>
  )
}

export default Showcase

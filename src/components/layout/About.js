import React from 'react'
import { Link } from 'gatsby'
import '../css/About.css'
import brand from './svgs/brand-logo.svg'

const About = () => {
  return (
    <>
      <div className="about_container">
        <section>
          <div className="about_image">
            <img src={brand} alt="Prit dev" className="my-logo" />
          </div>
        </section>
        <section>
          <div className="about_text">
            <h2 className="h2" style={{}} className="about_header">
              About Me
            </h2>
            <p className="about_body">
              Hi, I'm <span className="hi-code">Prit</span>. I've been building
              websites for over five years. I'm 16 years old web developer and
              <strong> constantly</strong> learning new things every day. I've
              learned so many things in the past five years of experience.
              Self-taught developer and no one can stop me from learning!
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default About

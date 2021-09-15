import React from 'react'
import { Link } from 'gatsby'
import '../css/About.css'
import brand from './svgs/brand-logo.svg'

const About = () => {
  return (
    <div className="about_container">
      <section>
        <div className="about_image">
          <img src={brand} alt="Brand Logo" className="my-logo" />
        </div>
      </section>
      <section>
        <div className="about_text">
          <h2 className="about_header">🎙️ Your host</h2>
          <p className="about_body">
            Hi, I'm <span className="hi-code">Prit</span>. I've been building
            websites for over five years. I'm 16 years old web developer and
            <strong> constantly</strong> learning new things every day. I've
            learned so many things in the past five years of experience.
            Self-thought developer and no one can stop me from learning!
          </p>
        </div>
      </section>
      <hr id="hr-body" />
    </div>
  )
}

export default About

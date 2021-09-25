import React from 'react'
import Layout from '../components/layout/Layout'
import { Helmet } from 'react-helmet'
import MetaTags from 'react-meta-tags'
import '../theme/main.scss'
const About = () => {
  return (
    <Layout>
      <Helmet>
        <MetaTags>
          <title>About | Pritudev</title>
          <meta
            name="description"
            content="Something About Owner Of This  Website Pritudev"
          />
          <meta property="og:title" content="About" />
        </MetaTags>
      </Helmet>
      <div className="about-container" style={{ lineHeight: '1.5' }}>
        <h2 classname="about-me">About me</h2>
        <h5 classname="quick-intro">
          Software engineer, blog writer, open-sourcerer
        </h5>
        <p style={{ textAlign: 'center' }}>
          Hello, I am Prit! I am a 16 year old programmer and student. I enjoy
          programming a lot. I've created websites, Discord bots, etc. I am a
          self taught developer and I have been programming for 5 years mostly
          focusing on design & codes.
        </p>
      </div>
    </Layout>
  )
}

export default About

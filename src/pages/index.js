import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.js'
import Showcase from '../components/layout/Showcase.js'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Footer from '../components/layout/Footer.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import firebase from './svgs/firebase.svg'
import git from './svgs/git.svg'
import github from './svgs/github.svg'
import html from './svgs/html.svg'
import js from './svgs/js.svg'
import mongo from './svgs/mongo.svg'
import node from './svgs/node.svg'
import react from './svgs/react.svg'
import vsc from './svgs/vsc.svg'
import css from './svgs/css.svg'
import Projects from '../components/layout/Projects'
import '../theme/partials/_works.css'

export default ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>Prit dev - Web Developer</title>
        <meta
          name="og:description"
          content="Welcome to Prit's Portfolio & blog, You'll soo many tips and tricks also some blogs related to web development, javascript, so much other stuff. You are always welcome"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Pritudev" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <Showcase />
      <h2
        class="h2"
        style={{
          textAlign: 'Left',
          marginLeft: '10px',
          fontWeight: '600',
        }}
      >
        My Backpack
      </h2>
      <br />
      <section className="basic-grid">
        <abbr title="Firebase">
          <div classNameName="img"></div>
          <img alt="Firebase" src={firebase} />
        </abbr>
        <abbr title="Git">
          <div className="img"></div>
          <img alt="Git" src={git} />
        </abbr>
        <abbr title="Github">
          <div className="img"></div>
          <img alt="Github" src={github} />
        </abbr>
        <abbr title="HTML">
          <div className="img">
            <img alt="Html" src={html} />
          </div>
        </abbr>
        <abbr title="CSS">
          <div className="img">
            <img alt="Css" src={css} />
          </div>
        </abbr>
        <abbr title="JS">
          <div className="img">
            <img alt="Javascript" src={js} />
          </div>
        </abbr>
        <abbr title="Mongo DB">
          <div className="img">
            <img alt="Mongo db" src={mongo} />
          </div>
        </abbr>
        <abbr title="Node JS">
          <div className="img">
            <img alt="Node js" src={node} />
          </div>
        </abbr>
        <abbr title="React Js">
          <div className="img">
            <img alt="Reactjs" src={react} />
          </div>
        </abbr>
        <abbr title="Visual Studio Code">
          <div className="img">
            <img alt="Vs Code" src={vsc} />
          </div>
        </abbr>
      </section>
      <br />
      <br />
      <p style={{ textAlign: 'center' }}>
        <em>
          This is not a full list of my skills. I'm also open to learn more
          frontend skills!
        </em>
      </p>
      <hr id="hr-body" />
      <h2
        className="h2"
        id="projects"
        style={{
          fontWeight: '600',
        }}
      >
        Projects
      </h2>

      <Projects></Projects>
      <div className="container">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8364169684965295"
          crossorigin="anonymous"
        ></script>
      </div>

      <Footer></Footer>
    </Layout>
  )
}

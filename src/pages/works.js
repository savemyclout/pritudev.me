import React from 'react'
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
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Footer from '../components/layout/Footer.js'
import Layout from '../components/layout/Layout.js'
import '../theme/partials/_works.css'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Layout>
      <Helmet>
        <title>Projects And Tools</title>
        <title>Pritudev - Web Developer</title>
        <meta
          name="og:description"
          content="List of my cool projects and some tools which i use use mostly in my websites."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Projects & Tools" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>

      <br />
      <h2 style={{ textAlign: 'Left', marginLeft: '10px' }}>Tools ⚙️</h2>
      <br />
      <section class="basic-grid">
        <abbb title="Firebase">
          <div class="img"></div>
          <img alt="Firebase" src={firebase} />
        </abbb>
        <abbr title="Git">
          <div class="img"></div>
          <img alt="Git" src={git} />
        </abbr>
        <abbr title="Github">
          <div class="img"></div>
          <img alt="Github" src={github} />
        </abbr>
        <abbr title="HTML">
          <div class="img">
            <img alt="Html" src={html} />
          </div>
        </abbr>
        <abbr title="CSS">
          <div class="img">
            <img alt="Css" src={css} />
          </div>
        </abbr>
        <abbr title="JS">
          <div class="img">
            <img alt="Javascript" src={js} />
          </div>
        </abbr>
        <abbr title="Mongo DB">
          <div class="img">
            <img alt="Mongo db" src={mongo} />
          </div>
        </abbr>
        <abbr title="Node JS">
          <div class="img">
            <img alt="Node js" src={node} />
          </div>
        </abbr>
        <abbr title="React Js">
          <div class="img">
            <img alt="Reactjs" src={react} />
          </div>
        </abbr>
        <abbr title="Visual Studio Code">
          <div class="img">
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
      <h2>Projects 🚀</h2>

      <Projects></Projects>
      <Footer />
    </Layout>
  )
}

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
      <h2>My Backpack</h2>
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
            <img
              height="60"
              width="60"
              alt="Javascript"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            />
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
        <abbr title="Gatsby">
          <div className="img">
            <img
              height="60"
              width="60"
              alt="Gatsby"
              src="https://camo.githubusercontent.com/cf400d5eb82cc14c74c5bcc39267ae6ccd3351f3c745462934145080a127b7f3/68747470733a2f2f73796d626f6c732e67657476656374612e636f6d2f7374656e63696c5f38312f31305f6761747362796a732d69636f6e2e366463663165363562382e737667"
            />
          </div>
        </abbr>
        <abbr title="Typescript">
          <div className="img">
            <img
              height="60"
              width="60"
              alt="Typescript"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            />
          </div>
        </abbr>
        <abbr title="c#">
          <div className="img">
            <img
              height="60"
              width="60"
              alt="c#"
              src="https://camo.githubusercontent.com/14f807754dbe07b53120f93d966dcd2577870e85e1dc6607f514b7b863984f91/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f3735323930373937323031383936323433332f3838393738313239343938373337343539322f6373686172705f6f726967696e616c5f6c6f676f5f69636f6e5f3134363537382e706e67"
            />
          </div>
        </abbr>
        <abbr title="c">
          <div className="img">
            <img
              height="60"
              width="60"
              alt="c"
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg"
            />
          </div>
        </abbr>
        <abbr title="python">
          <div className="img">
            <img
              height="60"
              width="60"
              alt="python"
              src="https://camo.githubusercontent.com/1e2f19ca5925272180e276e9de8deac54942c3e8aa8fea77f863fafd5ad4b3ce/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f31313070782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67"
            />
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

      <div id="projects">
        <br />
        <h2
          className="projects-h2"
          style={{
            fontWeight: '600',
          }}
        >
          Projects
        </h2>

        <Projects></Projects>
      </div>

      <div className="container">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8364169684965295"
          crossorigin="anonymous"
        ></script>
      </div>
      <br />
      <br />
      <div
        className="container"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <h2>Contact</h2>
        <h3
          style={{
            textAlign: 'center',
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          Would you like to work with me? Awesome!
        </h3>
        <div style={{ textAlign: 'center' }}>
          <Link to="https://twitter.com/PrituDevYT" target="_blank">
            <button id="green-btn">Let's Talk</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </Layout>
  )
}

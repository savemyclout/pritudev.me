import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.js'
import Showcase from '../components/layout/Showcase'
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

export default ({ data }) => {
  return (
    <Layout>
      <MetaTags>
        <title>Pritudev - Web Developer</title>
        <meta
          name="description"
          content="Welcome to pritudev blog / portfolio, hope your visit worth."
        />
        <meta property="og:title" content="Pritudev" />
      </MetaTags>
      <Helmet> </Helmet>
      <Showcase />
      <h2
        class="h2"
        style={{
          textAlign: 'Left',
          marginLeft: '10px',
          letterSpacing: '2px',
          fontWeight: '600',
        }}
      >
        My Tools
      </h2>
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
      <h2
        className="h2"
        id="projects"
        style={{
          letterSpacing: '2px',
          letterSpacing: '2px',
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

import React from 'react'
import Footer from '../components/layout/Footer'
import Layout from '../components/layout/Layout'
import './works.css'
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
import { Link } from 'gatsby'
import Projects from '../components/layout/Projects'

export default () => {
  return (
    <Layout>
      <title>Works | Prit Dev</title>
      {/* <h2 style={{ textAlign: 'center', paddingTop: '12px' }}>Works 💻</h2> */}
      <br />
      <h2 style={{ textAlign: 'Left', marginLeft: '10px' }}>Tools ⚙️</h2>
      <br />
      <section class="basic-grid">
        <abbb title="Firebase">
          <div class="img">
            <img src={firebase} />
          </div>
        </abbb>
        <abbr title="Git">
          <div class="img">
            <img src={git} />
          </div>
        </abbr>
        <abbr title="Github">
          <div class="img">
            <img src={github} />
          </div>
        </abbr>
        <abbr title="HTML">
          <div class="img">
            <img src={html} />
          </div>
        </abbr>
        <abbr title="CSS">
          <div class="img">
            <img src={css} />
          </div>
        </abbr>
        <abbr title="JS">
          <div class="img">
            <img src={js} />
          </div>
        </abbr>
        <abbr title="Mongo DB">
          <div class="img">
            <img src={mongo} />
          </div>
        </abbr>
        <abbr title="Node JS">
          <div class="img">
            <img src={node} />
          </div>
        </abbr>
        <abbr title="React Js">
          <div class="img">
            <img src={react} />
          </div>
        </abbr>
        <abbr title="Visual Studio Code">
          <div class="img">
            <img src={vsc} />
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

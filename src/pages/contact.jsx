import React from 'react'
import Layout from '../components/layout/Layout.jsx'
import MetaTags from 'react-meta-tags'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Pritudev</title>
        <meta name="og:description" content="Contact me, Maybe we hit it up!" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Contact" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Helmet>
      <div className="container">
        <h2 className="h2" style={{ paddingTop: '12px' }}>
          Contact
        </h2>
        <hr id="hr-body" />

        <h4 style={{ textAlign: 'center', fontFamily: 'sofiapro' }}>
          You can contact me by saying hello on social media's platform come an
          say hi! I always appreciate meeting new people.
        </h4>
      </div>
      <br />
      <br />

      <div className="container-btn" target="_blank">
        <Link to="https://discord.io/prituhq">
          <button id="indigo-btn">DISCORD</button>
        </Link>
        <Link to="https://instagram.com/_pritu_004_" target="_blank">
          <button id="pink-btn">INSTAGRAM</button>
        </Link>
        <div class="bottom-btn"></div>
        <Link to="https://twitter.com/PrituDevYT" target="_blank">
          <button id="green-btn">Twitter</button>
        </Link>
      </div>
    </Layout>
  )
}

export default Contact

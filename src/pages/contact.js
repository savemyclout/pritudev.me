import React from 'react'
import Layout from '../components/layout/Layout.js'
import MetaTags from 'react-meta-tags'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import discordLogo from './svgs/discord.svg'
import instaLogo from './svgs/insta.svg'
import twitterLogo from './svgs/twitter.svg'

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Contact - Pritudev</title>
        <meta
          name="og:description"
          content="Contact me, Maybe we hit something amazing!"
        />
        <meta
          name="description"
          content="Contact me, Maybe we hit something amazing!"
        />
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
        <h2 style={{ paddingTop: '12px' }}>Contact</h2>
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
          <button id="indigo-btn">
            <img
              style={{
                paddingBottom: '2px',
              }}
              src={discordLogo}
              alt="discord"
            />
            &nbsp; discord
          </button>
        </Link>
        <Link to="https://instagram.com/_pritu_004_" target="_blank">
          <button id="pink-btn">
            <img
              style={{
                paddingBottom: '2px',
              }}
              src={instaLogo}
              alt="instagram"
            />
            &nbsp; instagram
          </button>
        </Link>
        <div className="bottom-btn"></div>
        <Link to="https://twitter.com/PrituDevYT" target="_blank">
          <button id="green-btn">
            <img
              style={{
                paddingBottom: '2px',
              }}
              src={twitterLogo}
              alt="twitter"
            />
            &nbsp; Twitter
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default Contact

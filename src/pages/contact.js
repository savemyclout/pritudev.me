import React from 'react'
import Layout from '../components/layout/Layout.js'
import MetaTags from 'react-meta-tags'

const Contact = () => {
  return (
    <Layout>
      <MetaTags>
        <title>Contact - Pritudev</title>
        <meta
          name="description"
          content="Contact directly to Pritudev through some pages"
        />
        <meta property="og:title" content="Contact" />
      </MetaTags>
      <div className="container">
        <h2 style={{ fontFamily: 'cubano', paddingTop: '12px' }}>Contact 📝</h2>
        <hr id="hr-body" />

        <h4 style={{ textAlign: 'center', fontFamily: 'sofiapro' }}>
          You can contact me by saying hello on social media's platform come an
          say hi! I always appreciate meeting new people.
        </h4>
      </div>
      <br />
      <br />

      <div className="container-btn" target="_blank">
        <a href="https://discord.io/prituhq">
          <button id="indigo-btn">DISCORD</button>
        </a>
        <a href="https://instagram.com/_pritu_004_" target="_blank">
          <button id="pink-btn">INSTAGRAM</button>
        </a>
        <div class="bottom-btn"></div>
        <a href="https://twitter.com/PrituDevYT" target="_blank">
          <button id="green-btn">Twitter</button>
        </a>
      </div>
    </Layout>
  )
}

export default Contact

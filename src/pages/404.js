import React from 'react'
import Footer from '../components/layout/Footer.js'
import Layout from '../components/layout/Layout.js'
import MetaTags from 'react-meta-tags'
import '../theme/main.scss'

const notFound = () => {
  return (
    <Layout>
      <MetaTags>
        <title>Page Not Found Found • 404 - Pritudev</title>
        <meta name="description" content="Error 404 Page Not Found" />
        <meta property="og:title" content="404 Page Not Found" />
      </MetaTags>
      <h2 id="error__heading" style={{ textAlign: 'center' }}>
        Page Not Found
      </h2>
      <h5 id="error__body">
        Sorry 😔—we couldn’t find what you<br></br>were looking for.
      </h5>
      <h5 id="error__link">
        <a href="/">Go back to home page</a>
      </h5>
    </Layout>
  )
}

export default notFound

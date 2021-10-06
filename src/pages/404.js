import React from 'react'
import Footer from '../components/layout/Footer.js'
import Layout from '../components/layout/Layout.js'
import MetaTags from 'react-meta-tags'
import '../theme/main.css'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page Not Found Found • 404 - Pritudev</title>
        <title>Pritudev - Web Developer</title>
        <meta name="description" content="Error 404 Page Not Found." />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog"
        />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Error 404 Page Not Found!" />
      </Helmet>
      <h2 className="h2" id="error__heading" style={{ textAlign: 'center' }}>
        Page Not Found
      </h2>
      <h5 id="error__body">
        Sorry 😔—we couldn’t find what you<br></br>were looking for.
      </h5>
      <h5 id="error__link">
        <Link to="/">Go back to home page</Link>
      </h5>
    </Layout>
  )
}

export default notFound

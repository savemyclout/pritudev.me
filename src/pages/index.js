import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout.js'
import Showcase from '../components/layout/Showcase'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import MetaTags from 'react-meta-tags'
import Footer from '../components/layout/Footer.js'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default ({ data }) => {
  return (
    <Layout>
      <MetaTags>
        <title>Pritudev 👩‍💻👨‍💻</title>
        <meta
          name="description"
          content="Welcome to pritudev blog / portfolio, hope your visit worth."
        />
        <meta property="og:title" content="Pritudev" />
      </MetaTags>
      <Helmet> </Helmet>
      <Showcase />

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
;<script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8364169684965295"
  crossorigin="anonymous"
></script>

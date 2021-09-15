import React from 'react'
import Layout from '../components/layout/Layout'
import Showcase from '../components/layout/Showcase'
import LatestPosts from '../components/LatestPosts'
import AllPosts from '../components/AllPosts'
import { Helmet } from 'react-helmet'
import EmailAdd from '../components/EmailAdd'
import { Link } from 'gatsby'
import Snow from '../components/Snow'
import MetaTags from 'react-meta-tags'
import Footer from '../components/layout/Footer'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default ({ data }) => {
  return (
    <Layout>
      <MetaTags>
        <title>Pritu Dev</title>
        <meta
          name="description"
          content="Welcome to My Official Website/Portfolio, Here you'll find  everything about me and related my channel prit HQ."
        />
        <meta property="og:title" content="Pritu Dev" />
        <meta property="og:image" content="../img/nano-favicon.png" />
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

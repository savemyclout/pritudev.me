import React from 'react'
import Layout from '../components/layout/Layout.js'
import AllPosts from '../components/AllPosts.js'
import Footer from '../components/layout/Footer.js'
import MetaTags from 'react-meta-tags'
import '../theme/main.css'
import { Helmet } from 'react-helmet'

const Posts = () => {
  return (
    <Layout>
      <Helmet>
        <title>Blogs - pritudev</title>
        <meta
          name="og:description"
          content="List of soo many cool and helpful blogs related to web development, and general coding supports with some coding projects."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Webdeveloper, web development, css, blog, dev blog, pritudev, pritu, prit, prit dev, pritu developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Prit Dev" />
        <meta property="og:title" content="Articles Post" />
      </Helmet>
      <div id="heading">
        <h2
          className="h2"
          style={{
            paddingTop: '12px',
          }}
        >
          Recent Blogs
        </h2>
      </div>
      <hr id="hr-body" />
      <AllPosts />
      <Footer></Footer>
    </Layout>
  )
}

export default Posts

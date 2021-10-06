import React from 'react'
import Layout from '../components/layout/Layout.js'
import AllPosts from '../components/AllPosts'
import Footer from '../components/layout/Footer.js'
import MetaTags from 'react-meta-tags'
import '../theme/main.css'
import { Helmet } from 'react-helmet'
const Posts = () => {
  return (
    <Layout>
      <Helmet>
        <title>Articles - pritudev</title>
        <meta
          name="description"
          content="List of blogs in pritudev website or blog page"
        />
        <meta property="og:title" content="Blogs" />
      </Helmet>
      <div id="heading">
        <h2
          className="h2"
          style={{
            paddingTop: '12px',
          }}
        >
          Recent Articles
        </h2>
      </div>
      <hr id="hr-body" />
      <AllPosts />
      {/* <AllPosts /> */}
      <Footer></Footer>
    </Layout>
  )
}

export default Posts

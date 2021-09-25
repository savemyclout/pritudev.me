import React from 'react'
import Layout from '../components/layout/Layout'
import AllPosts from '../components/AllPosts'
import Footer from '../components/layout/Footer'
import MetaTags from 'react-meta-tags'

const Posts = () => {
  return (
    <Layout>
      <MetaTags>
        <title>Blog | pritudev</title>
        <meta
          name="description"
          content="List of blogs in pritudev website or blog page"
        />
        <meta property="og:title" content="Blogs" />
      </MetaTags>
      <h2 style={{ paddingTop: '12px' }}>Latest Feeds 🍪</h2>
      <hr id="hr-body" />
      <AllPosts />
      {/* <AllPosts /> */}
      <Footer></Footer>
    </Layout>
  )
}

export default Posts

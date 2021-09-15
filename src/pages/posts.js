import React from 'react'
import Layout from '../components/layout/Layout'
import AllPosts from '../components/AllPosts'
import Footer from '../components/layout/Footer'

const Posts = () => {
  return (
    <Layout>
      <title>Blog | Prit Dev</title>
      <h2 style={{ paddingTop: '12px' }}>Blogs 💾</h2>
      <hr id="hr-body" />
      <AllPosts />
      {/* <AllPosts /> */}
      <Footer></Footer>
    </Layout>
  )
}

export default Posts

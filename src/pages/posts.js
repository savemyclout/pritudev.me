import React from 'react'
import Layout from '../components/layout/Layout.js'
import AllPosts from '../components/AllPosts'
import Footer from '../components/layout/Footer.js'
import MetaTags from 'react-meta-tags'
import '../theme/main.scss'

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
      <div id="heading">
        <h2
          style={{
            paddingTop: '12px',
          }}
        >
          Latest Feeds 🍪
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

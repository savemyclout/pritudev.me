import React from 'react'
import Layout from '../components/layout/Layout'
import Courses from '../components/layout/Courses'
import Footer from '../components/layout/Footer'
import MetaTags from 'react-meta-tags'

export default () => {
  return (
    <Layout>
      <MetaTags>
        <title>Courses | Pritudev</title>
        <meta
          name="description"
          content="List of some online courses from pritudev youtube channel."
        />
        <meta property="og:title" content="Courses" />
      </MetaTags>
      <h2
        style={{
          fontFamily: 'cubano',
          textAlign: 'center',
          paddingTop: '12px',
          color: '#fff',
        }}
      >
        Courses/Videos 👨‍🏫
      </h2>
      <hr id="hr-body" />
      <Courses />
      <Footer />
    </Layout>
  )
}

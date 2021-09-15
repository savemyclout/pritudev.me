import React from 'react'
import Layout from '../components/layout/Layout'
import Courses from '../components/layout/Courses'
import Footer from '../components/layout/Footer'

export default () => {
  return (
    <Layout>
      <title>Courses/Videos</title>
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

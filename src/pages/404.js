import React from 'react'
import Footer from '../components/layout/Footer.tsx'
import Layout from '../components/layout/Layout.js'
import MetaTags from 'react-meta-tags'

export default () => {
  return (
    <Layout>
      <MetaTags>
        <title>404 | Page not found</title>
        <meta name="description" content="Error 404 Page Not Found" />
        <meta property="og:title" content="404 Page Not Found" />
      </MetaTags>
      <title>Error Page Not Found</title>
      <h2 style={{ textAlign: 'center' }}>Page Not Found</h2>
      <Footer />
    </Layout>
  )
}

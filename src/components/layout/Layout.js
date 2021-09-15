import React, { Fragment } from 'react'
import '../../theme/main.scss'
import Navbar from './Navbar'
import Footer from './Footer'
import PostState from '../../context/Posts/PostState'
import favicon from '../../img/nano-favicon.png'
import Helmet from 'react-helmet'

import PageTransition from 'gatsby-plugin-page-transitions'

const Layout = (props) => {
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <PostState>
        <Fragment>
          <Navbar />
          <PageTransition>{props.children}</PageTransition>
        </Fragment>
      </PostState>
    </Fragment>
  )
}

export default Layout

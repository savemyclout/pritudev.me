import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from '../css/BlogPost.module.scss'
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'

import Layout from '../layout/Layout'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx

  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div>
        <div className={styles.post}>
          <div className={styles.heading}>
            <small className={styles.date}>{frontmatter.date}</small>
            <h2 className={styles.title}>{frontmatter.title}</h2>
          </div>
          <hr id="hr-body" />
          {/* {!!frontmatter.cover ? (
            <Image
              fluid={frontmatter.cover.childImageSharp.sizes}
              className={styles.image}
            />
          ) : null} */}
          {/* 
          <hr
            style={{
              border: 'none',
              borderTop: '2px dashed $p-color',
              overflow: 'hidden',
              display: 'block',
              background: '#12181b',
              unicodeBidi: 'isolate',
              marginBlockStart: '0.5em',
              marginBlockEnd: '0.5em',
              marginInlineStart: 'auto',
              marginInlineEnd: 'auto',
            }}
          /> */}
          <div className={styles.body}>
            <p>
              {data.mdx.fields.readingTime.text} |{' '}
              {data.mdx.fields.readingTime.words} words | Posted By{' '}
              <a classname="postedby" href="https://github.com/pritudev">
                pritudev
              </a>
            </p>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM, YYYY")
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
      fields {
        readingTime {
          text
          words
        }
      }
    }
  }
`

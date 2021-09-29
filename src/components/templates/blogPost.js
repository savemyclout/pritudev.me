import React from 'react'
import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styles from '../css/BlogPost.module.scss'
import { Helmet } from 'react-helmet'
import Image from 'gatsby-image'
import Comments from '../Comments'
import Layout from '../layout/Layout.js'

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx
  // const Comments = new Comments('../Comments')
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div>
        <div className={styles.post}>
          <div className={styles.heading}>
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
              <span
                style={{
                  color: 'white',
                  backgroundColor: 'rgba(204, 204, 204, 0.253)',
                  padding: '4px',
                  borderRadius: '3px',
                }}
              >
                {frontmatter.tags}
              </span>
              <br />
              Posted By{' '}
              <a classname="postedby" href="https://github.com/pritudev">
                pritudev
              </a>{' '}
              ⋅ {<span className={styles.date}>{frontmatter.date}</span>} ⋅{' '}
              {data.mdx.fields.readingTime.text}
            </p>
            <MDXRenderer>{body}</MDXRenderer>
          </div>
          <Comments />
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
        date(formatString: "Do MMM")
        tags
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

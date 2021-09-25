import { graphql, useStaticQuery, Link, navigate } from 'gatsby'
import React, { Fragment } from 'react'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
        limit: 2
      ) {
        nodes {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            date(formatString: "YYYY Do MMMM ")
          }
          fields {
            slug
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <h2 className={styles.heading}>My Latest Posts</h2>
      <div className={styles.root}>
        {data.allMdx.nodes.map(({ frontmatter, excerpt, fields }) => {
          return (
            <div key={Math.random()} className={styles.post}>
              <h2>
                <Link rel="noopener" to={fields.slug} className={styles.link}>
                  {frontmatter.title}
                </Link>
              </h2>
              <small>{frontmatter.date}</small>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

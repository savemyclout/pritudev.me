import React, { Fragment } from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Image from 'gatsby-image'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } fileAbsolutePath: {regex: "/(posts)/.*\\.md$/"} }
      ) {
        nodes {
          id
          excerpt(pruneLength: 100)
          frontmatter {
            title
            date(formatString: "MMM DD ")
            
          }
          fields {
            slug
              readingTime {
                text

              }
          }
        }
      }
    }
  `)
  return (
    <Fragment>
      <div className="container post-container">
        {data.allMdx.nodes.map(({ frontmatter, excerpt, fields }) => {
          return (
            <div className="post">
              <div className="post-content">
                <Link rel="noopener" to={fields.slug} className="link">
                  <h2>{frontmatter.title}</h2>
                </Link>
                <p>{excerpt}</p>
                <p>
                  {frontmatter.date} ⋅ {fields.readingTime.text} ⋅{' '}
                  <a
                    style={{
                      color: 'white',
                      textDecoration: 'underline',
                      textDecorationColor: '#00ff6e',
                    }}
                    classname="postedby"
                    href="https://github.com/pritudev"
                  >
                    pritudev
                  </a>{' '}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Fragment>
  )
}

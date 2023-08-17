import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Heading = styled.p`
  display: inline-block;
`

const Articles = styled.article`
  margin-bottom: 40px;
  h3 {
    display: inline-block;
    margin-bottom: 10px;
    line-height: 1.2;
    padding-bottom: 0;
  }
  h3 a {
    color: #555;
    text-decoration: none;
    line-height: 0.1;
  }
  h3 a:hover,
  h3 a:focus {
    color: #319795;
  }
  time {
    opacity: 0.5;
    display: block;
    margin-bottom: 10px;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
      <Heading>
        Check out the interesting places on earth you've never seen before.
      </Heading>
    </div>
    <div className="container">
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Articles key={node.id}>
          <h3>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h3>
          <time>{node.frontmatter.date}</time>
          <p>{node.excerpt}</p>
          <Link className="btn btn-read-more" to={node.fields.slug}>
            Read more
          </Link>
        </Articles>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage

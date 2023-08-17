import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Comments from "../components/Comments"
import { firestore } from "../../firebase.js"

export default ({ data }) => {
  const post = data.markdownRemark
  const [comments, setComments] = useState([])
  const slug = post.fields.slug.substring(1, post.fields.slug.length - 1)

  useEffect(() => {
    const cleanUp = firestore
      .collection(`comments`)
      .onSnapshot(snapshot => {
        const posts = snapshot.docs
        .filter(doc => doc.data().slug === slug)
        .map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setComments(posts)
      })
    return () => cleanUp()
  }, [slug])

  return (
    <Layout>
      <div className="container">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Comments comments={comments} slug={slug} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

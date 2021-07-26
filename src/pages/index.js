import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"

export default function Home({ data }) {
  const bookList = data.allMarkdownRemark.edges

  return (
    <Layout>
      <h2 style={{ marginTop: "1.5rem", textAlign: "center" }}>
        Bootstrap Carousel
      </h2>
      <div className="book_wrapper container">
        {bookList.map((book, i) => {
          return (
            <div className="book_card" key={i}>
              <Link to={`/books/${book.node.frontmatter.slug}`}>
                <h2>{book.node.frontmatter.title}</h2>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query BookList {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
      }
    }
  }
`

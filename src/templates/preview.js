import { graphql, Link } from "gatsby"
import React from "react"

export default function Preview({ data }) {
  const preview = data.markdownRemark.html

  return (
    <div>
      <div className="container">
        <div className="book_preview">
          <Link to="/" className="btn_home">
            {/* <i class="bx bx-run"></i> */}
            Menu
          </Link>
          <div dangerouslySetInnerHTML={{ __html: preview }}></div>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query Preview($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
    }
  }
`

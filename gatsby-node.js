const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const previewTemplate = path.resolve(`./src/templates/preview.js`)

  const res = await graphql(`
    query MySlug {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      component: previewTemplate,
      path: `/books/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}

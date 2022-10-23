// <https://www.gatsbyjs.com/docs/node-apis/>

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        model: path.resolve(__dirname, 'src/model'),
        templates: path.resolve(__dirname, 'src/templates'),
        style: path.resolve(__dirname, 'src/style'),
      },
    },
  })
}

// Generate a Slug Each Post Data
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({ node, name: 'slug', value: slug })
  }
}

// Generate Post Page Through Markdown Data
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Get All Markdown File For Paging
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark(
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                categories
              }
            }
          }
        }
      }
    `,
  )

  // Handling GraphQL Query Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`)
    return
  }

  // Import Post Template Component
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  )

  const menuList = queryAllMarkdownData.data.allMarkdownRemark.edges.reduce(
    (
      list,
      {
        node: {
          frontmatter: { categories },
        },
      },
    ) => {
      categories.forEach(category => {
        const [parent, child] = category.split('/')
        if (child === undefined) {
          if (list[parent]?.cnt) {
            list[parent].cnt += 1
          } else {
            list[parent] = { cnt: 1, children: {} }
          }
        } else if (list[parent] === undefined) {
          list[parent] = { cnt: 0, children: { [child]: 1 } }
        } else if (list[parent].children[child] === undefined) {
          list[parent].children[child] = 1
        } else {
          list[parent].children[child] += 1
        }
      })

      return list
    },
    {},
  )

  // Page Generating Function
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug, menuList },
    }

    createPage(pageOptions)
  }

  // Generate Post Page And Passing Slug Props for Query
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}

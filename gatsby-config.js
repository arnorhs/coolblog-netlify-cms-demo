module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark'
  ]
};

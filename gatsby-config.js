module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: "markdown-pages",
      },
    },
    'gatsby-transformer-remark'
  ]
};

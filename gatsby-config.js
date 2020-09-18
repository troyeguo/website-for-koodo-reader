/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `cn`],
        // language file path
        defaultLanguage: `cn`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
      },
    },
  ],
}

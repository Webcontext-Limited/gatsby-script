module.exports = {
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GOOGLE_ADS_TRACKING_ID,
          process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager-timeout',
      options: {
        id: process.env.GOOGLE_TAG_MANAGER_ID,
        timeout: 1500,
      },
    },
    'gatsby-plugin-loadable-components-ssr',
  ],
};

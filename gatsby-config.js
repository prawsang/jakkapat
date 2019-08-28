module.exports = {
  siteMetadata: {
    title: `จักรพรรดิ ไทยฟู๊ดซัพพลาย`,
    description: `ก๋วยจั๊บญวนสูตรต้นตำรับอุบล เส้นเหนียวนุ่ม น้ำซุปหอม กลมกล่อม`,
    author: `@prawsang`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#e22821`,
        theme_color: `#e22821`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/
        }
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

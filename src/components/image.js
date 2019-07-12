import { graphql } from "gatsby"

export const fullWidthImage = graphql`
  fragment fullWidthImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fixed500 = graphql`
  fragment fixed500 on File {
    childImageSharp {
      fixed(width: 500) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fixed250 = graphql`
  fragment fixed250 on File {
    childImageSharp {
      fixed(width: 250) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fixed150 = graphql`
  fragment fixed150 on File {
    childImageSharp {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const fixed100 = graphql`
  fragment fixed100 on File {
    childImageSharp {
      fixed(width: 100) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Avatar = () => {
  return (
    <StaticQuery
      query={graphql`
        query GetAvatarImg {
          file(relativePath: { eq: "avatar.jpg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 25) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={({
        file: {
          childImageSharp: { fluid },
        },
      }) => {
        return (
          <div className="avatar-container">
            <Img className="avatar" fluid={fluid} />
          </div>
        )
      }}
    />
  )
}

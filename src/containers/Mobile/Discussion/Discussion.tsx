import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaRegCircle } from "react-icons/fa"
import styled from "styled-components"

import { colors, Types } from "../../../utils"

const Container = styled.div`
  padding: 0.6875rem;

  div {
    display: flex;

    .inner-message {
      font-size: 8px;
      padding: 0.5rem;
      background: #ede5f4;
      margin-bottom: 0.5rem;
      max-width: 8.0625rem;
      border-radius: 0.5rem;
    }
  }

  .me {
    justify-content: flex-end;

    .inner-message {
      background: white;
      box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.1);
      color: #78727c;
    }
  }

  .you {
    color: ${colors.text.moderateViolet};
  }

  .cta {
    .inner-message {
      width: 10rem;
      max-width: 10rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(
        to left,
        ${colors.gradients.violet},
        ${colors.gradients.magenta}
      );
      border-radius: 0.5rem 0.5rem 0.5rem 0.2rem;

      span {
        width: 75%;
        overflow: hidden;
        white-space: nowrap;
        color: ${colors.text.paleViolet};

        svg {
          margin-right: 0.5rem;
        }
      }

      h3 {
        width: 25%;
        color: white;
        font-weight: bold;
        margin: 0;
        font-size: 1rem;
      }
    }
  }
`

const ImgContainer: any = styled(Img)`
  margin-top: 0.7rem;
  margin-bottom: 0.4rem;

  div {
    padding: 0;
    width: 40px !important;
    height: 40px !important;
    padding: 0 !important;
    margin-left: 0.5rem;
  }
  img {
    width: 40px !important;
    height: 40px !important;
    border-radius: 0.5rem;
  }
`

export const Discussion = () => {
  return (
    <Container>
      <div className="you">
        <div className="inner-message">
          That sounds great. I’d be happy with that.
        </div>
      </div>
      <div className="you">
        <div className="inner-message">
          Could you send over some pictures of your dog, please?
        </div>
      </div>

      <StaticQuery
        query={graphql`
          query GetMsgImg1 {
            img1: file(relativePath: { eq: "dog-image-1.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 40) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img2: file(relativePath: { eq: "dog-image-2.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 40) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img3: file(relativePath: { eq: "dog-image-3.jpg" }) {
              childImageSharp {
                fluid(quality: 100, maxWidth: 40) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={({
          img1: {
            childImageSharp: { fluid: img1fluid },
          },
          img2: {
            childImageSharp: { fluid: img2fluid },
          },
          img3: {
            childImageSharp: { fluid: img3fluid },
          },
        }: {
          img1: {
            childImageSharp: Types.ImageSharp
          }
          img2: {
            childImageSharp: Types.ImageSharp
          }
          img3: {
            childImageSharp: Types.ImageSharp
          }
        }) => {
          return (
            <div className="me">
              <div className="inner-imgs">
                <ImgContainer className="img" fluid={img1fluid} />
                <ImgContainer className="img" fluid={img2fluid} />
                <ImgContainer className="img" fluid={img3fluid} />
              </div>
            </div>
          )
        }}
      />

      <div className="me">
        <div className="inner-message">
          Here are a few pictures. She’s a happy girl!
        </div>
      </div>
      <div className="me">
        <div className="inner-message">Can you make it?</div>
      </div>
      <div className="you">
        <div className="inner-message">
          She looks so happy! The time we discussed works. How long shall I take
          her out for?
        </div>
      </div>
      <div className="cta">
        <div className="inner-message">
          <span>
            <FaRegCircle />
            30 minute walk
          </span>
          <h3>$29</h3>
        </div>
      </div>
      <div className="cta">
        <div className="inner-message">
          <span>
            <FaRegCircle />1 hour walk
          </span>
          <h3>$49</h3>
        </div>
      </div>
    </Container>
  )
}

import React from "react"

import { graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import { Column, Head } from "../components"
import { BackLayout, MobileContainer, Texts } from "../containers"
import { colors } from "../utils"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Rubik', sans-serif;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: ${colors.secondary.lightGrayViolet};
`

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    display: block;
  }
`

export default ({ data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <>
      <Head title={siteTitle} />
      <GlobalStyle />
      <Container>
        <Wrapper>
          <BackLayout>
            <Column.Mobile className="mobile-container">
              <MobileContainer />
            </Column.Mobile>
            <Texts />
          </BackLayout>
        </Wrapper>
      </Container>
    </>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

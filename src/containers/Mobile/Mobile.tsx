import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { MdKeyboardArrowLeft } from "react-icons/md"

import { colors } from "../../utils"
import { MobileView } from "./MobileView"
import { Header } from "./Header"
import { Discussion } from "./Discussion"
import { NewMessage } from "./NewMessage"

const MobileSubContainer = styled.div`
  background: ${colors.secondary.lightGrayViolet};
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.2);
  height: 100%;
  border-radius: 2rem;
`

export const MobileContainer = () => {
  return (
    <MobileView>
      <MobileSubContainer className="mobile-sub-container">
        <Header />
        <Discussion />
        <NewMessage />
      </MobileSubContainer>
    </MobileView>
  )
}

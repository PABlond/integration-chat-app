import React, { FC } from "react"

import styled from "styled-components"

import { colors } from "../../utils"

const MobileContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 0 0 50%;
  margin-right: 6.81rem;
  max-width: 50%;
  overflow: hidden;
  padding: 10rem 0;

  @media (max-width: 768px) {
    margin-right: 0;
    max-width: 100%;
    justify-content: center;
    padding: 3rem 0;
  }
`

const DescriptionContainer = styled.div`
  margin-left: 1rem;
  flex: 0 0 50%;
  max-width: 50%;
  padding: 10rem 0;

  p,
  h1 {
    padding-right: 34.86%;
  }

  h1 {
    color: ${colors.text.veryDarkViolet};
  }

  p {
    color: ${colors.text.darkGrayViolet};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    max-width: 90%;
    justify-content: center;
    text-align: center;
    margin: auto;
    padding: 0;

    p,
    h1 {
      padding-right: 0;
    }
  }
`

const Mobile: FC = ({ children, ...rest }) => {
  return <MobileContainer {...rest}>{children}</MobileContainer>
}

const Description: FC = ({ children, ...rest }) => {
  return <DescriptionContainer {...rest}>{children}</DescriptionContainer>
}

export const Column = {
  Mobile,
  Description,
}

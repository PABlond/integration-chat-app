import React from "react"

import styled from "styled-components"

import { colors } from "../../utils"

const Background = styled.div`
  position: absolute;
  width: 39.39%;
  bottom: -10rem;
  height: 150%;
  right: calc(50% + 16.5rem);
  background: linear-gradient(
    ${colors.gradients.magenta},
    ${colors.gradients.violet}
  );
  transform: scaleY(0.6);
  border-radius: 0 0 50% 50%;
  z-index: 0;

  @media (max-width: 768px) {
    right: 50%;
    transform: scaleY(0.3);
    height: 200%;
    width: 100%;
  }
`

export const BackLayout = ({ children, ...rest }) => {
  return (
    <>
      <Background />
      {children}
    </>
  )
}

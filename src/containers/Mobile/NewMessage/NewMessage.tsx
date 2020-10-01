import React from "react"

import { MdKeyboardArrowRight } from "react-icons/md"
import styled from "styled-components"

import { colors } from "../../../utils"

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 2rem;
  padding: 0.2rem 0.5rem;
  margin: 0.6875rem;

  span {
    font-size: 0.5rem;
    margin-left: 1rem;
    color: ${colors.text.grayBlue};
  }

  div {
    border-radius: 50%;
    background: ${colors.text.veryDarkViolet};
    width: 1.5625rem;
    height: 1.5625rem;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: white;
      transform: scaleY(1.2);
      stroke-width: 1.5;
    }
  }
`

export const NewMessage = () => {
  return (
    <Container>
      <span>Type a message</span>
      <div>
        <MdKeyboardArrowRight />
      </div>
    </Container>
  )
}

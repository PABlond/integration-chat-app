import React from "react"

import styled from "styled-components"
import { MdKeyboardArrowLeft } from "react-icons/md"

import { colors } from "../../../utils"
import { Avatar } from "./Avatar"

const Container = styled.div`
  display: flex;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 4.125rem;
  width: 100%;
  background: red;
  border-radius: 2rem 2rem 0.5rem 0.5rem;
  position: relative;
  background: linear-gradient(
    to left,
    ${colors.gradients.magenta},
    ${colors.gradients.violet}
  );

  .header-top {
    position: absolute;
    background: white;
    top: 0;
    width: 8.1875rem;
    height: 1rem;
    border-radius: 0 0 0.8rem 0.8rem;
  }

  .interlocutor {
    height: 48px;
    width: 100%;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .interlocutor-left {
      width: 12.875rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        margin-left: 0.5rem;

        svg {
          font-size: 0.7rem;
          stroke-width: 1.5;
          transform: scaleY(1.7);
        }
      }

      div {
        h3,
        h4 {
          margin: 0;
        }

        h3 {
          font-size: 13px;
        }

        h4 {
          font-size: 6px;
          color: ${colors.text.paleViolet};
        }
      }

      .avatar-container {
        width: 2.5rem;

        .avatar {
          margin: auto;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 1px solid white;
        }
      }
    }

    .interlocutor-right {
      transform: rotate(90deg);
      font-weight: bold;
    }
  }
`

export const Header = () => {
  return (
    <Container>
      <div className="header-top" />
      <div className="interlocutor">
        <div className="interlocutor-left">
          <span>
            <MdKeyboardArrowLeft />
          </span>
          <Avatar />
          <div>
            <h3>Samuel Green</h3>
            <h4>Available to Walk</h4>
          </div>
        </div>
        <div className="interlocutor-right">...</div>
      </div>
    </Container>
  )
}

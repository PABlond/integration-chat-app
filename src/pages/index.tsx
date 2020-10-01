import React from "react"

import styled from "styled-components"

import { Column } from "../components"
import { BackLayout, MobileContainer } from "../containers"
import { colors } from "../utils"

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: ${colors.secondary.lightGrayViolet};

  .mobile-container {
    .mobile-sub-container {
      .header {
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
                color: #d879ff;
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
      }
    }
  }
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

export default () => {
  return (
    <Container>
      <Wrapper>
        <BackLayout>
          <Column.Mobile className="mobile-container">
            <MobileContainer />
          </Column.Mobile>
          <Column.Description className="description-container">
            <h1>Simple booking</h1>
            <p>
              Stay in touch with our dog walkers through the chat interface.
              This makes it easy to discuss arrangements and make bookings. Once
              the walk has been completed you can rate your walker and book
              again all through the chat.
            </p>
          </Column.Description>
        </BackLayout>
      </Wrapper>
    </Container>
  )
}

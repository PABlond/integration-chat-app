import React from "react"

import styled from "styled-components"

const Container = styled.div`
  width: 15.625rem;
  height: 31.5rem;
  border-radius: 2rem;
  padding: 0.6875rem;
`

export const MobileView = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>
}

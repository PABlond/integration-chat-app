import React, { FC } from "react"

import { Helmet } from "react-helmet"

export const Head: FC<HeadProps> = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://www.pablond.com" />
    </Helmet>
  )
}

type HeadProps = {
  title: string
}

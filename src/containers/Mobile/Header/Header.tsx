import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { MdKeyboardArrowLeft } from "react-icons/md"

import { Avatar } from "./Avatar"

export const Header = () => {
  return (
    <div className="header">
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
    </div>
  )
}

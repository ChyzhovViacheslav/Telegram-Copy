import React, { useEffect } from 'react'
import styled from 'styled-components'
import Logo from '../interface/logo/Logo'

const UserWrapper = styled.div`
    display: flex;
    column-gap: 15px;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    :hover{
      background-color: #a1a1a114;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    width: 100%;
    height: 100%;
    h2{
      font-size: 16px;
      font-weight: 400;
    }
    p{
      color: #797979;
    }
`

export default function User({ username, msg }) {
  const message = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus sed hic voluptatem odit tempore aperiam, voluptates corrupti voluptatibus ad repellat quam earum eveniet deleniti at nisi nesciunt omnis soluta.'

  return (
    <UserWrapper>
      <Logo />
      <Container>
        <h2>PomPushka</h2>
        <p>{message.slice(0, 65)}...</p>
      </Container>
    </UserWrapper>
  )
}

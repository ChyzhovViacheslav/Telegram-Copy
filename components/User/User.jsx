import React from 'react'
import styled from 'styled-components'
import Logo from '../interface/logo/Logo'

const UserWrapper = styled.div`
    padding: 6px 18px;
    display: flex;
    column-gap: 15px;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
`

export default function User({username, msg}) {
  return (
    <UserWrapper>
        <Logo/>
        <Container>
            <h2>{username}</h2>
            <p>{msg}</p>
        </Container>
    </UserWrapper>
  )
}

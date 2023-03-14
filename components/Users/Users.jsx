import React from 'react'
import styled from 'styled-components'
import User from '../User/User'

const UsersWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default function Users() {

  return (
    <UsersWrapper>
      <User />
    </UsersWrapper>
  )
}

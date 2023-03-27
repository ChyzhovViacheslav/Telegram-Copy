import React from 'react'
import styled from 'styled-components'
import { roomService } from '../../services/RoomService'
import User from '../User/User'

const UsersWrapper = styled.div`
  width: 100%;
  height: 100%;
`

export default function Users() {
  const { data, isLoading } = roomService.useGetCurrentRoomsQuery()

  return (
    <UsersWrapper>
      <User />
    </UsersWrapper>
  )
}

import React from 'react'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import { roomService } from '../../services/RoomService'
import User from '../User/User'

const UsersWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0px;
`

export default function Users() {
  const { data: rooms, isLoading } = roomService.useGetCurrentRoomsQuery()

  const renderRooms = () => {
    return rooms?.current_rooms.map((room) => {
      return <User 
        key={room} 
        roomId={room} 
        />
    })
  }

  return (
    <UsersWrapper>
      {!isLoading ? renderRooms() : <h1>Loading...</h1>}
    </UsersWrapper>
  )
}

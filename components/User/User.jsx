import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'
import { authUser } from '../../services/AuthUser'
import { roomService } from '../../services/RoomService'
import Logo from '../interface/logo/Logo'
import { changeCurrentRoom, changeCurrentUser } from '../../store/reducers/roomSlice'

const UserWrapper = styled.div`
    display: flex;
    column-gap: 8px;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    background-color: ${props => props.current ? 'var(--primary-color)' : 'none'} !important;
    &:hover{
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
      font-weight: 500;
    }
    p{
      color: ${props => props.current ? 'var(--primary-text-color)' : 'var(--secondary-text-color)'};
    }
`

export default function User({ roomId }) {
  const { id: currentUserId } = useAuth()
  const [userId, setUserId] = useState(null)
  const dispatch = useAppDispatch()

  const { data: room, isLoading: roomIsLoading } = roomService.useGetOneRoomQuery({ room: roomId })
  const { data: lastMessage, isLoading: messageIsLoading } = roomService.useGetLastMessageRoomQuery({ room: roomId })
  const { data: user } = authUser.useGetOneUserQuery({ id: userId }, { skip: !userId })
  const { currentRoom } = useAppSelector(state => state.roomSlice)

  useEffect(() => {
    if (room) {
      setUserId(room.users.filter(id => id !== currentUserId)[0])
    }
  }, [roomIsLoading])

  const openRoomHandler = () => {
    dispatch(changeCurrentRoom(roomId))
    dispatch(changeCurrentUser(user))
  }

  return (
    <UserWrapper
      current={roomId === currentRoom}
      onClick={openRoomHandler}
      onContextMenu={(e) => e.preventDefault()}>
      {user && !messageIsLoading ?
        <>
          <Logo image={user?.image} size={'54px'} />
          <Container current={roomId === currentRoom}>
            <h2>{user?.username}</h2>
            {lastMessage.message.length >= 60 ?
              <p>{lastMessage.message.slice(0, 60)}...</p>
              :
              <p>{lastMessage.message}</p>}
          </Container>
        </>
        : <h1>Load...</h1>}
    </UserWrapper>
  )
}

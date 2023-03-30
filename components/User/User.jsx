import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'
import { authUser } from '../../services/AuthUser'
import { roomService } from '../../services/RoomService'
import Logo from '../interface/logo/Logo'
import { changeCurrentRoom } from '../../store/reducers/roomSlice'

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

export default function User({ roomId }) {
  const { id: currentUserId } = useAuth()
  const [userId, setUserId] = useState(null)
  const dispatch = useAppDispatch()

  const { data: room, isLoading: roomIsLoading } = roomService.useGetOneRoomQuery({ room: roomId })
  const { data: lastMessage, isLoading: messageIsLoading } = roomService.useGetLastMessageRoomQuery({ room: roomId })
  const { data: user } = authUser.useGetOneUserQuery({ id: userId }, { skip: !userId })

  useEffect(() => {
    if (room) {
      setUserId(room.users.filter(id => id !== currentUserId)[0])
    }
  }, [roomIsLoading])

  const openRoomHandler = () => {
    dispatch(changeCurrentRoom(roomId))
  }

  return (
    <UserWrapper
      onClick={() => openRoomHandler()}
      onContextMenu={(e) => e.preventDefault()}>
      {user && !messageIsLoading ?
        <>
          <Logo image={user?.image} />
          <Container>
            <h2>{user?.username}</h2>
            {/* <p>{lastMessage?.slice(0, 65)}...</p> */}
          </Container>
        </>
        : <h1>Load...</h1>}
    </UserWrapper>
  )
}

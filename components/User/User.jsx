import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { roomService } from '../../services/RoomService'
import Logo from '../interface/logo/Logo'
import { changeCurrentRoom, changeCurrentUser } from '../../store/reducers/roomSlice'
import Ripple from '../interface/ripple/Ripple'
import SettingsModal from '../modals/SettingsModal/SettingsModal'
import IconSelector from '../../assets/icons/icons'

const UserWrapper = styled.div`
    position: relative;
    display: flex;
    column-gap: 8px;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    background-color: ${props => props.current ? 'var(--primary-color)' : 'none'} !important;
    &:hover{
      background-color: #a1a1a114;
    };
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
  const [mouseLocation, setMouseLoaction] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const dispatch = useAppDispatch()

  const { data: room } = roomService.useGetOneRoomQuery({ room: roomId })
  const [deleteRoom] = roomService.useDeleteRoomMutation()
  const { data: lastMessage, isLoading: messageIsLoading } = roomService.useGetLastMessageRoomQuery({ room: roomId })
  const { currentRoom } = useAppSelector(state => state.roomSlice)

  const openRoomHandler = () => {
    dispatch(changeCurrentRoom(roomId))
    dispatch(changeCurrentUser(room.user))
  }

  const openModalHandler = (e) => {
    e.preventDefault()
    setMouseLoaction({ x: e.clientX, y: e.clientY - 50 })
    setModalIsOpen(true)
  }

  const deleteRoomHandler = async () => {
    await deleteRoom(roomId)
  }

  return (
    <UserWrapper
      current={roomId === currentRoom}
      onClick={openRoomHandler}
      onContextMenu={openModalHandler}>
      {!messageIsLoading ?
        <>
          <Logo image={room?.user.images[0]} size={'54px'} />
          <Container current={roomId === currentRoom}>
            <h2>{room?.user.firstname}</h2>
            {lastMessage.message.length >= 60 ?
              <p>{lastMessage.message.slice(0, 60)}...</p>
              :
              <p>{lastMessage.message}</p>}
          </Container>
          <Ripple />
          <SettingsModal
            location={mouseLocation}
            open={modalIsOpen}
            setOpen={setModalIsOpen}>
            <div onClick={deleteRoomHandler}><IconSelector id={'delete'} color='var(--dark-danger-color)' /><span>Delete chat</span></div>
          </SettingsModal>
        </>
        : <h1>Load...</h1>}
    </UserWrapper>
  )
}

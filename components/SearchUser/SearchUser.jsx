import React from 'react'
import styled from 'styled-components'
import Logo from '../interface/logo/Logo'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { roomService } from '../../services/RoomService'
import useAuth from '../../hooks/useAuth'
import { changeCurrentRoom, changeCurrentUser } from '../../store/reducers/roomSlice'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  column-gap: 8px;
  &:hover{
    background-color: #a1a1a114;
  };
`

const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  h2{
    font-size: 16px;
    font-weight: 500;
  }
  p{
    color: var(--gray-text-color);
  }
`

const UserTag = styled.span`
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--gray-text-color)'};
`

export default function SearchUser({ user }) {
  const { username } = useAuth()
  const { searchValue } = useAppSelector(state => state.searchSlice)

  const dispatch = useAppDispatch()

  const [createRoom] = roomService.useCreateRoomMutation()

  const renderUsername = () => {
    return user.username.split('').map((letter, i) => {
      return <UserTag
        key={i}
        active={searchValue.toLowerCase()[i] === letter}>
        {letter}
      </UserTag>
    })
  }

  const createRoomHandler = async () => {
    await createRoom({ user: user._id, name: `${username} & ${user.username}` })
      .then(({data}) => {
        dispatch(changeCurrentRoom(data.room_id))
        dispatch(changeCurrentUser(data.user))
      })
  }

  return (
    <UserWrapper onClick={createRoomHandler}>
      <Logo size={'54px'} image={user.images[0]} />
      <UserInformation>
        <h2>{user.firstname}</h2>
        <p>@{renderUsername()}</p>
      </UserInformation>
    </UserWrapper>
  )
}

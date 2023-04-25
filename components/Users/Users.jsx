import React, { useEffect } from 'react'
import styled from 'styled-components'
import useAuth from '../../hooks/useAuth'
import { roomService } from '../../services/RoomService'
import User from '../User/User'
import { useAppSelector } from '../../hooks/redux'
import { authUser } from '../../services/AuthUser'
import SearchUser from '../SearchUser/SearchUser'

const UsersWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0px;
  overflow-y: auto;
  ::-webkit-scrollbar {
        width: 5px;
        background-color: none;
    }
    ::-webkit-scrollbar-track {
        background-color: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.4);
        border-radius: 8px;
    }
`

export default function Users() {
  const { id } = useAuth()
  const { searchValue } = useAppSelector(state => state.searchSlice)

  const { data: rooms, isLoading: roomsIsLoading } = roomService.useGetCurrentRoomsQuery()
  const { data: users, isLoading: usersIsLoading } = authUser.useSearchUsersQuery(searchValue, { skip: searchValue < 3 })

  useEffect(() => {

  }, [searchValue])


  const renderRooms = () => {
    return rooms?.current_rooms.map((room) => {
      return <User
        key={room}
        roomId={room}
      />
    })
  }

  const renderUsers = () => {
    return users?.map((user) => {
      if (user._id !== id) {
        return <SearchUser key={user._id} user={user} />
      }
    })
  }

  return (
    <UsersWrapper>
      {searchValue.length < 3 ?
        <>
          {!roomsIsLoading ? renderRooms() : <h1>Loading...</h1>}
        </>
        :
        <>
          {!usersIsLoading ? renderUsers() : <h1>Loading...</h1>}
        </>
      }
    </UsersWrapper>
  )
}

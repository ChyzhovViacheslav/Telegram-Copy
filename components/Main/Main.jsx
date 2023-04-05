import React, { useEffect } from 'react'
import styled from 'styled-components'
import Room from '../Room/Room'
import Search from '../Serach/Search'
import Users from '../Users/Users'
import { io } from 'socket.io-client'
import useAuth from '../../hooks/useAuth'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { changeCurrentRoom } from '../../store/reducers/roomSlice'

const MainWrapper = styled.div`
    display: flex;
    height: 100%;
    background-color: rgb(18, 25, 37);
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--surface-color);
    height: 100%;
    width: 500px;
    flex-shrink: 0;
`

const EmptyRoom = styled.div`
    height: 100%;
    width: 100%;
    background-color: var(--body-background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span{
        border-radius: 16px;
        padding: 6px 12px;
        font-size: 16px;
        background-color: var(--opacity-primary-text-color);
    }
`

export default function Main() {
    const {currentRoom} = useAppSelector(state => state.roomSlice)
    const dispatch = useAppDispatch()
    const { id } = useAuth()
    const socket = io('http://localhost:2000')

    useEffect(() => {
        socket.emit('setOnline', {user_id: id})
        return () => {
            dispatch(changeCurrentRoom(null))
            socket.emit('setOffline', {user_id: id})
        }
    }, [])

    return (
        <MainWrapper>
            <Container>
                <Search />
                <Users />
            </Container>
            {currentRoom ? <Room /> : <EmptyRoom><span>Select a chat from the list</span></EmptyRoom>}
        </MainWrapper>
    )
}

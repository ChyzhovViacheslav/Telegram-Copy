import React, { useEffect } from 'react'
import styled from 'styled-components'
import Room from '../Room/Room'
import Search from '../Serach/Search'
import Users from '../Users/Users'
import { io } from 'socket.io-client'
import useAuth from '../../hooks/useAuth'

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

export default function Main() {
    const { id } = useAuth()
    const socket = io('http://localhost:2000')

    useEffect(() => {
        socket.emit('setOnline', {user_id: id})
        return () => {
            console.log('disconnected')
            socket.emit('setOffline', {user_id: id})
        }
    }, [])

    return (
        <MainWrapper>
            <Container>
                <Search />
                <Users />
            </Container>
            <Room />
        </MainWrapper>
    )
}

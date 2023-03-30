import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'

const RoomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
`

const Input = styled.input`
    background-color: black;
    padding: 10px 5px;
`

const Button = styled.div`
    position: absolute;
    height: 37px;
    width: 37px;
    background-color: green;
    bottom: 0;
    right: 0;
    cursor: pointer;
`

export default function Room() {
    const { id } = useAuth()
    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])
    const { currentRoom } = useAppSelector(state => state.roomSlice)

    const socket = io('http://localhost:2000')

    useEffect(() => {
        socket.emit('joinRoom', { room_id: currentRoom })

        socket.emit('getMessages', { room_id: currentRoom })

        socket.on('allMessages', (data) => {
            setAllMessages(data)
        })
        
        socket.on('newMessage', (message) => {
            setAllMessages((prevMessages) => [...prevMessages, message])
        })

        return () => {
            socket.off('joinRoom')
            socket.off('getMessages')
        }
    }, [currentRoom])

    const sendMessageHandler = () => {
        socket.emit('sendMessage', {
            text: message,
            user_id: id,
            room_id: currentRoom
        })
    }

    const renderAllMessages = () => {
        return allMessages.map((msg) => {
            return <p key={msg._id}>{msg.message}</p>
        })
    }

    return (
        <RoomWrapper>
            {renderAllMessages()}
            <Input
                placeholder='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type='text' />
            <Button
                onClick={() => sendMessageHandler()} />
        </RoomWrapper>
    )
}

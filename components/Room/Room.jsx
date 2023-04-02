import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'
import InputMessage from '../interface/inputMessage/InputMessage'

const RoomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-end;
    background-color: var(--body-background-color);
`

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 728px;
    height: 100%;
    margin: 0 auto;
    overflow: auto;
    row-gap: 5px;
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

const RoomInfo = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    background-color: var(--surface-color);
`

const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.user ? 'flex-end' : 'flex-start'};
`

const Message = styled.div`
    padding: 5px 8px;
    background-color: var(--surface-color);
    border-radius: 8px;
    p{
        font-size: 18px;
    }
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
            const date = new Date(msg.created_at)
            const hours = date.getUTCHours().toString().padStart(2, '0')
            const minutes = date.getUTCMinutes().toString().padStart(2, '0')
            return <MessageWrapper key={msg._id} user={id === msg.author}>
                <Message>
                    <p>{msg.message}</p>
                    <span>{hours + ':' + minutes}</span>
                </Message>
            </MessageWrapper>
        })
    }

    return (
        <RoomWrapper>
            <RoomInfo>

            </RoomInfo>
            <MessagesWrapper>
                {renderAllMessages()}
            </MessagesWrapper>
            <InputMessage
                value={message}
                setMessage={setMessage} />
            <Button
                onClick={() => sendMessageHandler()} />
        </RoomWrapper>
    )
}

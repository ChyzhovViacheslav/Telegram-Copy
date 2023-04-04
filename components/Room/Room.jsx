import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'
import InputMessage from '../interface/inputMessage/InputMessage'
import IconSelector from '../../assets/icons/icons'
import Logo from '../interface/logo/Logo'

const RoomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: var(--body-background-color);
`

const RoomInfo = styled.div`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    background-color: var(--surface-color);
    padding-left: 20px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    h1,span{
        line-height: 120%;
    }
    h1{
        font-size: 16px;
    }
    span{
        margin-top: 2px;
        font-size: 14px;
        color: var(--dark-primary-color);
    }
`

const ContainerControllers = styled.div`
    display: flex;
    height: 100%;
    overflow: hidden;
    width: 782px;
    margin: 0 auto;
    align-items: flex-end;
    margin-bottom: 20px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const MessagesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    row-gap: 5px;
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

const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: auto;
    ${props => {
        switch (props.variant) {
            case 'first-user':
                return `
                    justify-content: flex-end;
                `
            case 'second-user':
                return `
                    justify-content: flex-start;
                `
            case 'system':
                return `
                    justify-content: center;
                `
        }
    }}
`

const Message = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 6px 8px;
    border-radius: 8px;
    p{
        font-size: 16px;
    }
    span{
        margin-left: 5px;
        font-size: 11px;
        opacity: 0.5;
    }
    ${props => {
        switch (props.variant) {
            case 'first-user':
                return `
                    background-color: var(--dark-primary-color);
                `
            case 'second-user':
                return `
                    background-color: var(--surface-color);
                `
            case 'system':
                return `
                    background-color: var(--opacity-primary-text-color);
                    border-radius: 16px;
                    padding: 6px 12px;
                    span{
                        display: none;
                    }
                `
        }
    }}
`

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 54px;
    height: 54px;
    border-radius: 100%;
    background-color: var(--primary-color);
    margin-left: 15px;
    flex-shrink: 0;
    padding-left: 4px;
    &:hover{
        background-color: var(--dark-primary-color);
    }
    svg{
        transform: scale(1.2);
    }
`

export default function Room() {
    const socket = io('http://localhost:2000')

    const { id } = useAuth()

    const [roomIsLoading, setRoomIsLoading] = useState(true)
    const [fetchingMessages, setFetchingMessages] = useState(false);
    const [message, setMessage] = useState('')
    const [allMessages, setAllMessages] = useState([])
    const [messageLimit, setMessageLimit] = useState(50)
    
    const messagesRef = useRef(null)

    const { currentRoom, currentUser } = useAppSelector(state => state.roomSlice)

    useEffect(() => {
        socket.emit('joinRoom', { room_id: currentRoom })

        socket.emit('getMessages', { room_id: currentRoom, limit: messageLimit })

        socket.on('allMessages', (data) => {
            setAllMessages(data)
            setFetchingMessages(false)
            setRoomIsLoading(false)
        })

        socket.on('newMessage', (message) => {
            setAllMessages((prevMessages) => [...prevMessages, message])
        })

        return () => {
            socket.off('joinRoom')
            socket.off('getMessages')
            setRoomIsLoading(true)
        }
    }, [currentRoom])


    useEffect(() => {
        if (!roomIsLoading) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [roomIsLoading])


    const sendMessageHandler = (e) => {
        e.preventDefault()
        socket.emit('sendMessage', {
            text: message,
            user_id: id,
            room_id: currentRoom
        })
        setMessage('')
    }

    const scrollHandler = (e) => {
        const { scrollTop } = e.target;

        if (scrollTop <= 100 && !fetchingMessages) {
            setFetchingMessages(true)
            const newMessageLimit = messageLimit + 50

            socket.emit('getMessages', { room_id: currentRoom, limit: newMessageLimit })

            socket.on('allMessages', (data) => {
                if (allMessages.length !== data.length) {
                    setMessageLimit(newMessageLimit)
                }
                setAllMessages(data)
                setFetchingMessages(false)
            })
        }
    }

    const renderAllMessages = () => {
        return allMessages.map((msg) => {
            const date = new Date(msg.created_at)
            const hours = date.getUTCHours().toString().padStart(2, '0')
            const minutes = date.getUTCMinutes().toString().padStart(2, '0')

            const authorMessage = (author) => {
                switch (author) {
                    case id:
                        return 'first-user'
                    case 'system':
                        return 'system'
                    default: 
                        return 'second-user'
                }
            }

            return <MessageWrapper key={msg._id} variant={authorMessage(msg.author)}>
                <Message variant={authorMessage(msg.author)}>
                    <p>{msg.message}</p>
                    <span>{hours + ':' + minutes}</span>
                </Message>
            </MessageWrapper>
        })
    }

    return (
        <RoomWrapper>
            <RoomInfo>
                <Logo image={currentUser.image} size={'42px'}/>
                <UserInfo>
                    <h1>{currentUser.username}</h1>
                    <span>online</span>
                </UserInfo>
            </RoomInfo>
            <ContainerControllers>
                <Container>
                    <MessagesWrapper
                        ref={messagesRef}
                        onScroll={scrollHandler}>
                        {renderAllMessages()}
                    </MessagesWrapper>
                    <InputMessage
                        value={message}
                        setMessage={setMessage} />
                </Container>
                <Button onClick={sendMessageHandler} >
                    <IconSelector id={'send'} color='#fff' />
                </Button>
            </ContainerControllers >
        </RoomWrapper>
    )
}
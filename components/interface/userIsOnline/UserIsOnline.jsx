import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const LastActives = styled.span`
    margin-top: 2px;
    font-size: 14px;
    color: ${props => props.online ? 'var(--dark-primary-color)' : 'var(--gray-text-color)'};
`

export default function UserIsOnline({ userId, lastActive }) {
    const [userLastActive, setUserLastActive] = useState(null)

    const userLastActiveHandler = () => {
        if (lastActive === null) {
            setUserLastActive('online')
        } else {
            const currentDate = new Date()
            const diffInSeconds = Math.floor((currentDate - lastActive) / 1000)
            setUserLastActive(diffInSeconds)
        }
    }

    useEffect(() => {
        userLastActiveHandler()
        const interval = setInterval(() => {
            userLastActiveHandler()
        }, 1000);
        return () => clearInterval(interval);
    }, [userId, lastActive])

    const renderLastActive = () => {
        if (userLastActive === 'online') {
            return userLastActive
        } else if (userLastActive < 60) {
            return "был(а) в сети только что";
        } else if (userLastActive < 120) {
            return "был(а) в сети минуту назад";
        } else if (userLastActive < 3600) {
            return `был(а) в сети ${Math.floor(userLastActive / 60)} минут назад`;
        } else if (userLastActive < 7200) {
            return "был(а) в сети час назад";
        } else {
            return `был(а) в сети ${Math.floor(userLastActive / 3600)} часов назад`;
        }
    }

    return <LastActives online={userLastActive === 'online'}>{renderLastActive()}</LastActives>
}

import React from 'react'
import styled, { keyframes } from 'styled-components'
import IconSelector from '../../../assets/icons/icons'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { closeNotification, clearTypeNotification } from '../../../store/reducers/modalsSlice'

const Opacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`

const Disappear = keyframes`
    from{
        opacity: 1;
    } 
    to{
        opacity: 0;
    }
`

const NotificationWrapper = styled.div`
    position: fixed;
    top: 85px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--surface-color);
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 8px;
    column-gap: 10px;
    cursor: pointer;
    svg{
        height: 30px;
        width: 30px;
    }
    span{
        font-size: 16px;
    }
    animation: ${props => props.active ? Opacity : Disappear} 0.3s ease-in-out forwards;
`

export default function Notification() {
    const { currentNotificationType, notificationIsActive } = useAppSelector(state => state.modalsSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(closeNotification())
            dispatch(clearTypeNotification())
        }, 5000);

        return () => {
            clearTimeout(timeout)
        }
    }, [notificationIsActive, currentNotificationType])


    const renderTextType = () => {
        switch (currentNotificationType) {
            case 'copy':
                return <span>Information was copied</span>

            default:
                return 'Wrong type text'
        }
    }

    const onClickHandler = () => {
        dispatch(closeNotification())
        dispatch(clearTypeNotification())
    }

    return (
        <>
            {notificationIsActive && <NotificationWrapper active={notificationIsActive} onClick={onClickHandler}>
                <IconSelector id={'warn'} color='#fff' />
                {renderTextType()}
            </NotificationWrapper>}
        </>
    )
}

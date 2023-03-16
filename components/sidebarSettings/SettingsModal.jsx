import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import useAuth from '../../hooks/useAuth'
import { changeSettingsModal, changeAuthModal } from '../../store/reducers/modalSlice'

const SettingsModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #00000067;
    pointer-events: ${props => props.active ? "all" : "none"};
    opacity: ${props => props.active ? "1" : "0"};
`

const Settings = styled.div`
    top: 0%;
    left: 0%;
    position: absolute;
    width: 300px;
    height: 100%;
    background-color: rgb(18, 25, 37);
`

const LoginBtn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    transition: all 0.2s ease-in-out; 
    cursor: pointer;
    :hover{
        background-color: rgb(12, 17, 26);
    }
    h1{
        text-transform: uppercase;
        letter-spacing: 8px;
    }
`

export default function SettingsModal() {
    const { isAuth } = useAuth()
    const { settingsModal } = useAppSelector(state => state.modalSlice)
    const dispatch = useAppDispatch()

    return (
        <SettingsModalWrapper
            active={settingsModal}
            onClick={() => dispatch(changeSettingsModal(false))}>
            <Settings onClick={(e) => e.stopPropagation()}>
                {isAuth ?
                    <></>
                    :
                    <LoginBtn onClick={() => dispatch(changeAuthModal(true))}>
                        <h1>LOGIN</h1>
                    </LoginBtn>}
            </Settings>
        </SettingsModalWrapper>
    )
}

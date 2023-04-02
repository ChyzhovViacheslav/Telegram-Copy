import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { authUser } from '../../../services/AuthUser'
import { setToken, setUser } from '../../../store/reducers/authSlice'
import useAuth from '../../../hooks/useAuth'

const LoginFormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 360px;
    margin: 0 auto;
    height: 100%;
    justify-content: center;
    h1, p{
        text-align: center;
    }
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    margin-top: 60px;
    label{
        position: relative;
        width: 100%;
        ::after{
            transform: translate(0%, -50%);
            left: 15px;
            top: 50%;
            position: absolute;
            color: var(--gray-text-color);
            background-color: var(--surface-color);
            padding: 0px 5px;
            text-transform: capitalize;
            transition: all 0.15s ease-in-out;
            font-size: 18px;
            pointer-events: none;
        }
    }
    label:focus-within::after{
        font-size: 12px !important;
        top: 0% !important;
        color: var(--primary-color);
    }
    label#email{
        ::after{
            content: 'email'
        }
    }
    label#password{
        ::after{
            content: 'password'
        }
    }

    input{
        padding: 15px;
        border-radius: 8px;
        width: 100%;
        background-color: inherit;
        outline: solid var(--input-search-border-color);
        transition: outline-color 0.2s ease-in-out;
        outline-width: 1px;
        :hover{
            outline: solid var(--dark-primary-color);
            outline-width: 1px;
        }
        :focus{
            outline: solid var(--primary-color);
            outline-width: 2px;
        }
    }
`

const Subtitle = styled.p`
    font-size: 18px;
    margin-top: 10px;
    color: var(--secondary-text-color);
`

const LoginBtn = styled.button`
    margin-top: 20px;
    border-radius: 8px;
    text-align: center;
    padding: 15px 0px;
    background-color: var(--primary-color);
    &:hover{
        background-color: var(--dark-primary-color);
    }
    span{
        font-size: 18px;
        font-weight: 500;
    }
`

const EmailLabel = styled.label`
    &::after{
        font-size: ${props => props.active ? '12px' : '18px'} !important;
        top: ${props => props.active ? '0%' : '50%'}!important;
    }
`

const PasswordLabel = styled.label`
    &::after{
        font-size: ${props => props.active ? '12px' : '18px'} !important;
        top: ${props => props.active ? '0%' : '50%'}!important;
    }
`

export default function AuthModal() {
    const [loginUser] = authUser.useLoginUserMutation()
    const [registerUser] = authUser.useRegisterUserMutation()

    const dispatch = useAppDispatch()
    const [currentForm, setCurrentForm] = useState('login')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

    const [regUsername, setRegUsername] = useState('')
    const [regPass, setRegPass] = useState('')
    const [regEmail, setRegEmail] = useState('')

    const loginHandler = async (e) => {
        e.preventDefault()

        const candidate = {
            email: loginEmail,
            password: loginPass
        }

        await loginUser(candidate)
            .then(({ data }) => {
                dispatch(setToken(data))
                dispatch(setUser(data.user))
            })
            .catch((e) => console.log(e))
    }

    const registerHandler = async (e) => {
        e.preventDefault()

        const candidate = {
            email: regEmail,
            password: regPass,
            username: regUsername
        }

        await registerUser(candidate)
            .then(({ data }) => {
                dispatch(setToken(data))
                dispatch(setUser(data.user))
            })
            .catch((e) => console.log(e))
    }

    return (
        <LoginFormWrapper>
            <h1>Sign in to Copygram</h1>
            <Subtitle>Please enter your details below</Subtitle>
            <InputWrapper>
                <EmailLabel active={!!loginEmail.length} id='email'>
                    <input
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}/>
                </EmailLabel>
                <PasswordLabel active={!!loginPass} id='password'>
                    <input 
                        value={loginPass}
                        onChange={(e) => setLoginPass(e.target.value)}/>
                </PasswordLabel>
            </InputWrapper>
            <LoginBtn 
                onClick={(e) => loginHandler(e)}>
                    <span>LOGIN</span>
            </LoginBtn>
        </LoginFormWrapper>
    )
}

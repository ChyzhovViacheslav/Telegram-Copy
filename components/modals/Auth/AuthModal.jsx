import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../hooks/redux'
import { authUser } from '../../../services/AuthUser'
import { setToken, setUser } from '../../../store/reducers/authSlice'
import InputDefault from '../../interface/inputDefault/InputDefault'

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

export default function AuthModal() {
    const [loginUser] = authUser.useLoginUserMutation()
    const [registerUser] = authUser.useRegisterUserMutation()

    const dispatch = useAppDispatch()

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
                <InputDefault
                    primary
                    content={'email'}
                    setValue={setLoginEmail}
                    value={loginEmail} />
                <InputDefault
                    primary
                    content={'password'}
                    setValue={setLoginPass}
                    value={loginPass} />
            </InputWrapper>
            <LoginBtn
                onClick={(e) => loginHandler(e)}>
                <span>LOGIN</span>
            </LoginBtn>
        </LoginFormWrapper>
    )
}

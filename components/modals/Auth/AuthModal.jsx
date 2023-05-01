import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../../hooks/redux'
import { authUser } from '../../../services/AuthUser'
import { setToken, setUser } from '../../../store/reducers/authSlice'
import InputDefault from '../../interface/inputDefault/InputDefault'
import IconSelector from '../../../assets/icons/icons'

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
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 500;
    }
    svg{
        transform: scale(3);
    }
`

const AuthorizeError = styled.div`
    padding: 10px 0px;
    border-radius: 8px;
    border: 1px solid var(--dark-danger-color);
    background-color: var(--danger-color);
    text-align: center;
    margin-top: 20px;
    span{
        font-size: 18px;
        font-weight: 400;
    }
`

const SetFormBtn = styled(LoginBtn)`
    background-color: var(--surface-color);
    border: 1px solid var(--dark-primary-color);
    span{
        color: var(--primary-color);
    }
    &:hover{
        background-color: var(--body-background-color);
    }
`

const RegistrationFormWrapper = styled(LoginFormWrapper)`
    
`

export default function AuthModal() {
    const [loginUser, { isLoading: loginIsLoading }] = authUser.useLoginUserMutation()
    const [registerUser, { isLoading: regIsLoading }] = authUser.useRegisterUserMutation()

    const dispatch = useAppDispatch()

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

    const [regUsername, setRegUsername] = useState('')
    const [regFirstname, setRegFirstname] = useState('')
    const [regSecondname, setRegSecondname] = useState('')
    const [regPass, setRegPass] = useState('')
    const [regDirtypass, setRegdirtypass] = useState('')
    const [regEmail, setRegEmail] = useState('')

    const [inputType, setInputType] = useState('primary')
    const [passType, setPassType] = useState('primary')

    const [currentForm, setCurrentForm] = useState('login')

    const loginHandler = async (e) => {
        e.preventDefault()

        const candidate = {
            email: loginEmail,
            password: loginPass
        }

        await loginUser(candidate)
            .then(({ data }) => {
                if (data) {
                    dispatch(setToken(data))
                    dispatch(setUser(data.user))
                    setInputType('primary')
                } else {
                    setInputType('warn')
                }
            })
    }

    const registerHandler = async (e) => {
        e.preventDefault()

        if (regPass !== regDirtypass) {
            setPassType('warn')
        } else {
            setPassType('primary')
            const candidate = {
                email: regEmail,
                password: regPass,
                username: regUsername,
                firstname: regFirstname,
                lastname: regSecondname,
            }

            await registerUser(candidate)
                .then(({ data }) => {
                    if (data) {
                        setPassType('primary')
                        setInputType('primary')
                        dispatch(setToken(data))
                        dispatch(setUser(data.user))
                    } else {
                        setPassType('warn')
                        setInputType('warn')
                    }
                })
                .catch((e) => console.log(e))
        }
    }

    return (
        <>
            {currentForm === 'login' ?
                <LoginFormWrapper>
                    <h1>Sign in to Copygram</h1>
                    <Subtitle>Please enter your details below</Subtitle>
                    <InputWrapper>
                        <InputDefault
                            type={inputType}
                            content={'email'}
                            setValue={setLoginEmail}
                            value={loginEmail} />
                        <InputDefault
                            type={inputType}
                            content={'password'}
                            setValue={setLoginPass}
                            value={loginPass} />
                    </InputWrapper>
                    {inputType === 'warn' ? <AuthorizeError><span>Email or password error</span></AuthorizeError> : null}
                    <LoginBtn
                        onClick={loginHandler}>
                        {loginIsLoading ? <IconSelector id='loading' /> : <span>LOGIN</span>}
                    </LoginBtn>
                    <SetFormBtn onClick={() => setCurrentForm('register')}>
                        <span>go to registration</span>
                    </SetFormBtn>
                </LoginFormWrapper>
                :
                <RegistrationFormWrapper>
                    <h1>Register in to Copygram</h1>
                    <Subtitle>Please enter your details below</Subtitle>
                    <InputWrapper>
                        <InputDefault
                            type={inputType}
                            content={'username'}
                            setValue={setRegUsername}
                            value={regUsername.toLowerCase()} />
                        <InputDefault
                            type={inputType}
                            content={'email'}
                            setValue={setRegEmail}
                            value={regEmail} />
                        <InputDefault
                            type={inputType}
                            content={'firstname (requiered)'}
                            setValue={setRegFirstname}
                            value={regFirstname} />
                        <InputDefault
                            type={inputType}
                            content={'lastname (optional)'}
                            setValue={setRegSecondname}
                            value={regSecondname} />
                        <InputDefault
                            type={passType || inputType}
                            content={'password'}
                            setValue={setRegPass}
                            value={regPass} />
                        <InputDefault
                            type={passType || inputType}
                            content={'Password confirmation'}
                            setValue={setRegdirtypass}
                            value={regDirtypass} />
                    </InputWrapper>
                    {inputType === 'warn' ? <AuthorizeError><span>Email or Username</span></AuthorizeError> : null}
                    <LoginBtn
                        onClick={registerHandler}>
                        {regIsLoading ? <IconSelector id='loading' /> : <span>REGISTER</span>}
                    </LoginBtn>
                    <SetFormBtn onClick={() => setCurrentForm('login')}>
                        <span>sign in</span>
                    </SetFormBtn>
                </RegistrationFormWrapper>}
        </>
    )
}

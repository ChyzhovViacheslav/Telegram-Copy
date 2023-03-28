import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { authUser } from '../../../services/AuthUser'
import { changeAuthModal } from '../../../store/reducers/modalSlice'
import { setToken, setUser } from '../../../store/reducers/authSlice'
import useAuth from '../../../hooks/useAuth'

const ModalWrapper = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0000005a;
    opacity: ${props => props.active ? "1" : "0"};
    pointer-events: ${props => props.active ? "all" : "none"};
`

const Modal = styled.div`
    background-color: rgb(22, 29, 46);
    width: 400px;
    min-height: 100px;
    border-radius: 8px;
    position: relative;
    padding: 15px;
    overflow: hidden;
`

const Close = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: red;
    top: 10px;
    right: 10px;
    cursor: pointer;
`

const SelectForm = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 15px;
    position: relative;
`

const LoginBtn = styled.div`
    padding: 10px;
    text-align: center;
    width: 50%;
    cursor: pointer;
`

const RegisterBtn = styled.div`
    padding: 10px;
    text-align: center;
    width: 50%;
    cursor: pointer;
`

const FormRegister = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 15px;
    label{
        p{
            font-size: 16px;
            text-transform: capitalize;
            margin-bottom: 10px;
        }
        input{
            border: 1px solid white;
            background-color: inherit;
            padding: 5px 10px;
            font-size: 16px;
            width: 100%;
        }
    }
    button{
        letter-spacing: 4px;
        background-color: inherit;
        border-bottom: 2px solid white;
        padding: 5px 0px;
        transition: all 0.2s ease-in-out;
        :hover{
            background-color: white;
            span{
                color: rgb(18, 25, 37);
            }
        }
        span{
            font-size: 20px;
            transition: all 0.2s ease-in-out;
        }
    }
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    margin-left: 20px;
    .btn{
        flex: 1 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    label{
        p{
            font-size: 16px;
            text-transform: capitalize;
            margin-bottom: 10px;
        }
        input{
            border: 1px solid white;
            background-color: inherit;
            padding: 5px 10px;
            font-size: 16px;
            width: 100%;
        }
    }
    button{
        width: 100%;
        letter-spacing: 4px;
        background-color: inherit;
        border-bottom: 2px solid white;
        padding: 5px 0px;
        transition: all 0.2s ease-in-out;
        :hover{
            background-color: white;
            span{
                color: rgb(18, 25, 37);
            }
        }
        span{
            text-transform: uppercase;
            font-size: 20px;
            transition: all 0.2s ease-in-out;
        }
    }
`

const FormWrapper = styled.div`
    transition: all 0.3s ease-in-out;
    transform: ${props => props.tab === 'login' ? 'translateX(calc(-50% - 10px))' : 'none'};
    width: calc(200% + 20px);
    display: flex;
`

const CurrentLine = styled.div`
    position: absolute;
    width: 50%;
    height: 2px;
    bottom: 0;
    transition: all 0.3s ease-in-out;
    left: ${props => props.current === 'login' ? "0%" : "50%"};
    background-color: white;
`

export default function AuthModal() {
    const [loginUser] = authUser.useLoginUserMutation()
    const [registerUser] = authUser.useRegisterUserMutation()

    const { authModal } = useAppSelector(state => state.modalSlice)
    const dispatch = useAppDispatch()
    const [currentForm, setCurrentForm] = useState('login')

    const [loginPass, setLoginPass] = useState('')
    const [loginEmail, setLoginEmail] = useState('')

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
            .then(({data}) => {
                console.log(data)
                dispatch(setToken(data))
                dispatch(setUser(data.user))
                dispatch(changeAuthModal(false))
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
            .then(({data}) => {
                dispatch(setToken(data))
                dispatch(setUser(data.user))
                dispatch(changeAuthModal(false))
            })
            .catch((e) => console.log(e))
    }

    return (
        <ModalWrapper
            active={authModal}
            onClick={() => dispatch(changeAuthModal(false))}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <SelectForm>
                    <LoginBtn onClick={() => setCurrentForm('login')}>
                        <h2>Login</h2>
                    </LoginBtn>
                    <RegisterBtn onClick={() => setCurrentForm('register')}>
                        <h2>Signup</h2>
                    </RegisterBtn>
                    <CurrentLine current={currentForm} />
                </SelectForm>
                <FormWrapper tab={currentForm}>
                    <FormRegister>
                        <label>
                            <p>username</p>
                            <input
                                onChange={(e) => setRegUsername(e.target.value)}
                                type="text" />
                        </label>
                        <label>
                            <p>email</p>
                            <input
                                onChange={(e) => setRegEmail(e.target.value)}
                                type="text" />
                        </label>
                        <label>
                            <p>password</p>
                            <input
                                onChange={(e) => setRegPass(e.target.value)}
                                type="text" />
                        </label>
                        <button onClick={(e) => registerHandler(e)}><span>REGISTER</span></button>
                    </FormRegister>
                    <FormLogin>
                        <label>
                            <p>email</p>
                            <input
                                onChange={(e) => setLoginEmail(e.target.value)}
                                type="text" />
                        </label>
                        <label>
                            <p>password</p>
                            <input
                                onChange={(e) => setLoginPass(e.target.value)}
                                type="text" />
                        </label>
                        <div className='btn'>
                            <button onClick={(e) => loginHandler(e)}>
                                <span>Login</span>
                            </button>
                        </div >
                    </FormLogin>
                </FormWrapper>
                <Close onClick={() => dispatch(changeAuthModal(false))} />
            </Modal>
        </ModalWrapper>
    )
}

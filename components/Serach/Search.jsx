import React, { useState } from 'react'
import styled from 'styled-components'
import InputSearch from '../interface/inputsearch/InputSearch'
import SettingsModal from '../modals/SettingsModal/SettingsModal'
import { useAppDispatch } from '../../hooks/redux'
import { removeToken, removeUser } from '../../store/reducers/authSlice'

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 13px;
  box-shadow: 0 2px 2px rgba(0,0,0,0.25098);
  position: relative;
`

const SettingsBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  flex-shrink: 0;
  position: relative;
  cursor: pointer;
  &:hover{
    background-color: var(--input-search-border-color);
  }
  &::after,
  &::before,
  span{
    content: '';
    position: absolute;
    height: 2px;
    width: 50%;
    background-color: var(--primary-text-color);
    opacity: 0.7;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &::after{
    top: 35%;
  }
  &::before{
    top: 65%;
  }
  span{
    top: 50%;
  }
`

export default function Search() {
  const [modalIsActive, setModalIsActive] = useState(false)
  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(removeToken())
    dispatch(removeUser())
  }

  return (
    <Container>
      <SettingsBtn 
        onClick={() => { setModalIsActive(!modalIsActive) }}>
        <span></span>
      </SettingsBtn>
      <InputSearch />
      <SettingsModal
        setOpen={setModalIsActive} 
        open={modalIsActive}>
        <h1 onClick={logoutHandler}>logout</h1>
      </SettingsModal>
    </Container>
  )
}

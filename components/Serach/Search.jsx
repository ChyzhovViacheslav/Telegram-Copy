import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import InputSearch from '../interface/inputsearch/InputSearch'
import SettingsModal from '../modals/SettingsModal/SettingsModal'
import { useAppDispatch } from '../../hooks/redux'
import { removeToken, removeUser } from '../../store/reducers/authSlice'
import { useEffect } from 'react'
import IconSelector from '../../assets/icons/icons'

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

export default function Search({setSettingsIsOpen}) {
  const btnRef = useRef(null)
  const [btnLocation, setBtnLocation] = useState(null)
  const [modalIsActive, setModalIsActive] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const locations = btnRef.current.getBoundingClientRect()
    setBtnLocation({ x: locations.x, y: locations.y })
  }, [])

  const logoutHandler = () => {
    dispatch(removeToken())
    dispatch(removeUser())
  }

  const settingsHandler = () => {
    setSettingsIsOpen(true)
  }

  return (
    <Container>
      <SettingsBtn
        ref={btnRef}
        onClick={() => { setModalIsActive(!modalIsActive) }}>
        <span></span>
      </SettingsBtn>
      <InputSearch />
      <SettingsModal
        location={btnLocation}
        setOpen={setModalIsActive}
        open={modalIsActive}>
          <div onClick={settingsHandler}><IconSelector id={'settings'} color={'#fff'}/><span>Settings</span></div>
          <div onClick={logoutHandler}><IconSelector id={'logout'} color={'#fff'}/><span>Log Out</span></div>
      </SettingsModal>
    </Container>
  )
}

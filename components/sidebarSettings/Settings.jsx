import React from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {changeSettingsModal} from '../../store/reducers/modalSlice'

const SettingsWrapper = styled.div`
    width: 75px;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Profile = styled.div`
  width: 100%;
  height: 60px;
  position: relative;
  cursor: pointer;
  :hover{
    background-color: red;
  }
  ::before, ::after, span{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    content: '';
    width: 25%;
    height: 2px;
    background-color: #a8a8a8;
    opacity: 0.5;
  }
  ::before{
    top: 40%;
  }
  ::after{
    top: 61%;
  }
  span{
    top: 50%;
  }
`

export default function Settings() {
  const {settingsModal} = useAppSelector(state => state.modalSlice)
  const dispatch = useAppDispatch()

  return (
    <SettingsWrapper>
      <Profile onClick={() => dispatch(changeSettingsModal(true))}><span></span></Profile>
    </SettingsWrapper>
  )
}

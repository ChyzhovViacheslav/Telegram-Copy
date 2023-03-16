import React, { useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { changeAuthModal } from '../../../store/reducers/modalSlice'

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

export default function AuthModal() {
    const { authModal } = useAppSelector(state => state.modalSlice)
    const dispatch = useAppDispatch()

    return (
        <ModalWrapper
            active={authModal}
            onClick={() => dispatch(changeAuthModal(false))}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <Close onClick={() => dispatch(changeAuthModal(false))} />
            </Modal>
        </ModalWrapper>
    )
}

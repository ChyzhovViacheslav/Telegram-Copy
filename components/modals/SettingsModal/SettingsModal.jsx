import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: red;
  display: flex;
  flex-direction: center;
  align-items: center;
`

// const Modal = styled.div`
//     display: flex;
//     flex-direction: column;
//     border-radius: 8px;
//     padding: 5px;
//     background-color: rgba(33,33,33,0.6);
//     backdrop-filter: blur(10px);
//     position: absolute;
//     top: 100%;
//     left: 15px;
//     transform-origin: top left;
//     transform: translate(-50%, -50%);
//     transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
//     opacity: ${props => props.active ? '1' : '0'};
//     transition: all 0.2s ease-in-out;
// `

const Modal = styled.div`
  position: absolute;
  background-color: white;
`

export default function SettingsModal({ open, setOpen, children }) {
  const wrapperRef = useRef(null)

  return (
    <>
      {open && (
        <ModalWrapper ref={wrapperRef} onClick={() => {}}>
          <Modal>
            {children}
          </Modal>
        </ModalWrapper>
      )}
    </>
  )
}

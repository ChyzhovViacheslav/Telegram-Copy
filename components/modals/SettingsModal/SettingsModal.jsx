import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  flex-direction: center;
  align-items: center;
  pointer-events: ${props => props.open ? 'all' : 'none'};
`

const Modal = styled.div`
  position: absolute;
  background-color: #212121c7;
  box-shadow: 0 0.25rem 0.5rem 0.125rem var(--default-shadow-color);
  border-radius: 8px;
  padding: 10px;
  backdrop-filter: blur(10px);
  top: ${props => `${props.top + 46}px`};
  left: ${props => `${props.left}px`};
  pointer-events: ${props => props.open ? 'all' : 'none'};
  opacity: ${props => props.open ? '1' : '0'};
  transform: ${props => props.open ? 'scale(1)' : 'scale(0.5)'};
  transition: all 0.25s cubic-bezier(.35,-1,.65, 1);
  transform-origin: 0 0;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  div{
    display: flex;
    align-items: center;
    column-gap: 20px;
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 6px;
    svg{
      width: 20px;
      height: 20px;
      opacity: 0.7;
    }
    span{
      font-size: 14px;
      font-weight: 500;
    }
    &:hover{
      background-color: var(--body-background-color);
    }
  }
`

export default function SettingsModal({ open, setOpen, children, location }) {
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleEscape(e){
      if(e.keyCode === 27){
        setOpen(false)
      }
    }

    if(open) {
      document.addEventListener('keydown', handleEscape)
    }
  
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open, setOpen])
  

  return (
    <>
      {location &&
        <ModalWrapper
          open={open}
          ref={wrapperRef}
          onClick={() => { setOpen(false) }}>
          <Modal
            onClick={(e) => e.stopPropagation()}
            open={open}
            top={location.y}
            left={location.x}>
            {children}
          </Modal>
        </ModalWrapper>
      }
    </>
  )
}

import React from 'react'
import styled from 'styled-components'

const SettingsModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 5px;
    background-color: rgba(33,33,33,0.6);
    backdrop-filter: blur(10px);
    position: absolute;
    top: 100%;
    left: 15px;
    transform-origin: top left;
    transform: translate(-50%, -50%);
    transform: ${props => props.active ? 'scale(1)' : 'scale(0.5)'};
    opacity: ${props => props.active ? '1' : '0'};
    transition: all 0.2s ease-in-out;
`

export default function SettingsModal({open, children}) {
  return (
    <SettingsModalWrapper active={open}>
        {children}
    </SettingsModalWrapper>
  )
}

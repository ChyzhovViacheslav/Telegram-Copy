import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--surface-color);
    width: 470px;
    height: 100%;
    flex-shrink: 0;
    pointer-events: ${props => props.open ? 'all' : 'none'};
`

const Actions = styled.div`
    display: flex;
    align-items: center;
    height: 56px;
    width: 100%;
    padding: 8px 12px;
    h2{
        margin-left: 22px;
    }
`

const CloseBtn = styled.div`
    width: 44px;
    height: 44px;
    position: relative;
    cursor: pointer;
    &::after,&::before{
        content: '';
        position: absolute;
        width: 50%;
        height: 2px;
        background-color: #fff;
        border-radius: 16px;
        top: 50%;
        left: 50%;
    }
    &::after{
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &::before{
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`

export default function SidebarUserInfo({isOpen, setIsOpen}) {
    return (
        <Wrapper open={isOpen}>
            <Actions>
                <CloseBtn onClick={() => setIsOpen(false)}/>
                <h2>User Info</h2>
            </Actions>
        </Wrapper>
    )
}

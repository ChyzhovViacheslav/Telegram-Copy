import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import UserIsOnline from '../interface/userIsOnline/UserIsOnline'
import IconSelector from '../../assets/icons/icons'
import Ripple from '../interface/ripple/Ripple'

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

const Images = styled.div`
    position: relative;
    width: 100%;
    height: 470px;
    img{
        height: 100%;
        width: 100%;
    }
`

const InfoName = styled.div`
    position: absolute;
    bottom: 15px;
    left: 25px;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    span{
        color: #fff;
        opacity: 0.7;
    }
    z-index: 999;
`

const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px -50px 50px -30px rgba(0, 0, 0, 0.5);
    z-index: 888;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    padding: 10px;
`

const UserInfoWrapper = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    column-gap: 25px;
    padding: 10px;
    border-radius: 12px;
    cursor: pointer;
    svg{
        height: 30px;
        width: 30px;
    }
    div{
        display: flex;
        row-gap: 6px;
        flex-direction: column;
        align-items: flex-start;
        h2{
            font-weight: 400;
            font-size: 20px;
        }
        span{
            color: var(--gray-text-color);
            font-weight: 500;
        }
    }
    &:hover{
        background-color: var(--input-search-border-color);
    }
`

export default function SidebarUserInfo({ isOpen, setIsOpen, user, userLastActive }) {
    const copyHandler = (text) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <Wrapper open={isOpen}>
            <Actions>
                <CloseBtn onClick={() => setIsOpen(false)} />
                <h2>User Info</h2>
            </Actions>
            <Images>
                <Image src={require(`../../server/images/${user.image}`)} alt='image' />
                <InfoName>
                    <h2>{user.username}</h2>
                    <UserIsOnline userId={user._id} lastActive={userLastActive} />
                </InfoName>
                <Shadow />
            </Images>
            <UserInfo>
                <UserInfoWrapper onClick={() => copyHandler(user.email)}>
                    <IconSelector id='mail' color='#9e9e9e' />
                    <div>
                        <h2>{user.email}</h2>
                        <span>Email</span>
                    </div>
                    <Ripple />
                </UserInfoWrapper>
                <UserInfoWrapper onClick={() => copyHandler(user.username)}>
                    <IconSelector id='at' color='#9e9e9e' />
                    <div>
                        <h2>{user.username}</h2>
                        <span>Username</span>
                    </div>
                    <Ripple/>
                </UserInfoWrapper>
            </UserInfo>
        </Wrapper>
    )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import Search from '../Serach/Search'
import Users from '../Users/Users'
import SidebarUserInfo from '../SidebarUserInfo/SidebarUserInfo'
import useAuth from '../../hooks/useAuth'
import UserInfo from '../UserInfo/UserInfo'
import { useAppSelector } from '../../hooks/redux'

const SidebarWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--surface-color);
    height: 100%;
    width: 500px;
    flex-shrink: 0;
    border-right: 1px solid var(--input-search-border-color);
`

export default function Sidebar() {
    const [settingsIsOpen, setSettingsIsOpen] = useState(false)
    const [changeUserInfoIsOpen, setChangeUserInfoIsOpen] = useState(false)
    const { username, email, images } = useAuth()

    const closeSettings = () => setSettingsIsOpen(false)

    return (
        <SidebarWrapper>
            {!settingsIsOpen ?
                <>
                    <Search setSettingsIsOpen={setSettingsIsOpen} />
                    <Users />
                </> :
                <>
                    {changeUserInfoIsOpen ?
                        <UserInfo
                            setIsOpen={setChangeUserInfoIsOpen} />
                        :
                        <SidebarUserInfo
                            setChangeUser={setChangeUserInfoIsOpen}
                            setIsOpen={closeSettings}
                            isSettings={true}
                            isOpen={settingsIsOpen}
                            userLastActive={null}
                            user={{
                                username: username,
                                email: email,
                                images: images
                            }} />}
                </>}
        </SidebarWrapper>
    )
}

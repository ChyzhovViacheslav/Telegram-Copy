import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import Search from '../Serach/Search'
import Settings from '../sidebarSettings/Settings'
import SettingsModal from '../sidebarSettings/SettingsModal'
import Users from '../Users/Users'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(22, 29, 46);
    height: 100%;
    width: 500px;
`

const SidebarWrapper = styled.div`
    display: inline-flex;
    height: 100%;
    background-color: rgb(18, 25, 37);
`

export default function Sidebar() {
    const { some } = useAppSelector(state => state.authSlice)

    return (
        <SidebarWrapper>
            <Settings/>
            <Container>
                <Search />
                <Users />
            </Container>
            <SettingsModal/>
        </SidebarWrapper>
    )
}

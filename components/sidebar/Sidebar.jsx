import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'
import Search from '../Serach/Search'
import Users from '../Users/Users'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    width: 500px;
    background-color: rgb(22, 29, 46);
    height: 100%;
`

export default function Sidebar() {
    const { some } = useAppSelector(state => state.authSlice)
    
    return (
        <Container>
            <Search/>
            <Users/>
        </Container>
    )
}

import React from 'react'
import styled from 'styled-components'
import Room from '../Room/Room'
import Search from '../Serach/Search'
import Users from '../Users/Users'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--surface-color);
    height: 100%;
    width: 500px;
    flex-shrink: 0;
`

const MainWrapper = styled.div`
    display: inline-flex;
    height: 100%;
    background-color: rgb(18, 25, 37);
`

export default function Main() {

    return (
        <MainWrapper>
            <Container>
                <Search />
                <Users />
            </Container>
            <Room/>
        </MainWrapper>
    )
}
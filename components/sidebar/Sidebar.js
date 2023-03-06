import React from 'react'
import styled from 'styled-components'
import { useAppSelector } from '../../hooks/redux'

const Container = styled.div`

`

export default function Sidebar() {
    const { some } = useAppSelector(state => state.authSlice)

    
    return (
        <Container>
            <h1>{some}</h1>
        </Container>
    )
}

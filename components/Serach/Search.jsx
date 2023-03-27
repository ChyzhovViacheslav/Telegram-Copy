import React from 'react'
import styled from 'styled-components'
import InputSearch from '../interface/inputsearch/InputSearch'

const Container = styled.div`
    padding: 15px;
`

export default function Search() {
  return (
    <Container>
        <InputSearch/>
    </Container>
  )
}

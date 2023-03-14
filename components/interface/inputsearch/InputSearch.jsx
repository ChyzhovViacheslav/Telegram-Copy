import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 100%;
    line-height: 22px;
    font-size: 14px;
    border-radius: 4px;
    padding: 4px 18px;
    background-color: rgb(38, 45, 61);
    ::placeholder{
        color: #a8a8a8;
        opacity: 0.5;
    }
`

export default function InputSearch() {
    return (
        <Input
            type='text'
            placeholder='Поиск' />
    )
}

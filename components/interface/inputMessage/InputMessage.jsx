import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
    background-color: black;
    padding: 10px 5px;
`

export default function InputMessage({value, setMessage}) {
    return (
        <Input
            placeholder='Message'
            value={value}
            onChange={(e) => setMessage(e.target.value)}
            type='text' />
    )
}

import React, { useState } from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
    position: relative;
`

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

const CloseBtn = styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    right: 5px;
    top: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    background-color: red;
`

export default function InputSearch() {
    const [text, setText] = useState('')

    return (
        <InputWrapper>
            <Input
                type='text'
                placeholder='Поиск'
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            {text.length ? <CloseBtn onClick={() => setText('')}/> : null}
        </InputWrapper>
    )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import IconSelector from '../../../assets/icons/icons'

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: var(--input-search-border-color);
    padding: 8px 16px;
    border-radius: 20px;
    align-items: center;
    margin-left: 15px;
    svg{
        height: 18px;
        width: 18px;
        path{
            fill: var(--primary-text-color);
            opacity: 0.7;
        }
    }
    &:focus-within{
        outline: 2px solid var(--dark-primary-color);
        background-color: var(--surface-color);
        svg{
            path{
                fill: var(--dark-primary-color);
                opacity: 1;
            }
        }
    }
`
const Input = styled.input`
    margin-left: 10px;
    width: 100%;
    background-color: inherit;
    font-size: 16px;
    color: var(--primary-text-color);
    &::placeholder{
        color: var(--primary-text-color);
        opacity: 0.7;
    }
`

export default function InputSearch() {
    const [text, setText] = useState('')

    return (
        <InputWrapper>
            <IconSelector id='search' />
            <Input
                placeholder='Search' />
        </InputWrapper>
    )
}

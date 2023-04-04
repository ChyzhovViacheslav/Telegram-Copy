import React from 'react'
import styled from 'styled-components'
import IconSelector from '../../../assets/icons/icons'

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    flex-shrink: 0;
    height: 54px;
    margin-top: 10px;
    `

const Input = styled.input`
    background-color: black;
    width: 100%;
    color: var(--primary-text-color);
    font-size: 16px;
    background-color: inherit;
    &::selection{
        background-color: var(--primary-color);
    }
    &:focus{
        caret-color: var(--primary-color);
    }
    `

const InputMessageWrapper = styled.div`
    background-color: var(--surface-color);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0px 25px;
    border-radius: 10px;
    position: relative;
    &:after{
        content: 'Message';
        position: absolute;
        font-size: 16px;
        color: var(--secondary-text-color);
        left: ${props => props.empty ? '50px' : '25px'};
        opacity: ${props => props.empty ? '0' : '1'};
        transition: all 0.2s ease-in-out;
        pointer-events: none;
    }
`

export default function InputMessage({ value, setMessage, sendMessage }) {
    return (
        <InputWrapper>
            <InputMessageWrapper empty={value.length}>
                <Input
                    value={value}
                    onChange={(e) => setMessage(e.target.value)}
                    type='text' />
            </InputMessageWrapper>
        </InputWrapper>
    )
}

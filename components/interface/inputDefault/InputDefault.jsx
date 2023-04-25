import React from 'react'
import styled from 'styled-components'

const InputLabel = styled.label`
    position: relative;
    &:focus-within::after{
        font-size: 12px !important;
        top: 0% !important;
        color: ${props => props.type === 'warn' ? 'var(--danger-color)' : 'var(--primary-color)'};;
    }
    &::after{
        position: absolute;
        content: ${props => `"${props.content}"`};
        left: 15px;
        top: ${props => props.active ? '0%' : '50%'};
        transform: translate(0%, -50%);
        color: var(--gray-text-color);
        background-color: var(--surface-color);
        padding: 0px 5px;
        text-transform: capitalize;
        transition: all 0.15s ease-in-out;
        font-size: ${props => props.active ? '12px' : '18px'} !important;
        pointer-events: none;
        line-height: 120%;
    }
    &:hover{
        &::after{
            color: ${props => props.type === 'warn' ? 'var(--danger-color)' : 'var(--primary-color)'};
        }
    }

    input{
        font-size: 18px;
        padding: 15px;
        border-radius: 12px;
        width: 100%;
        background-color: inherit;
        outline: solid ${props => {
        switch (props.type) {
            case 'primary':
                return 'var(--input-search-border-color)';
            case 'warn':
                return 'var(--danger-color)';
            default:
                return 'var(--input-search-border-secondary-color)';
        }
    }};
        transition: outline-color 0.2s ease-in-out;
        outline-width: 1px;
        :hover{
            outline: solid ${props => props.type === 'warn' ? 'var(--dark-danger-color)' : 'var(--dark-primary-color)'};
            outline-width: 1px;
        }
        :focus{
            outline: solid ${props => props.type === 'warn' ? 'var(--danger-color)' : 'var(--primary-color)'};
            outline-width: 2px;
        }
    }
`

export default function InputDefault({ value, setValue, content, type }) {
    return (
        <InputLabel
            type={type}
            active={!!value.length}
            content={content}>
            <input
                name={value}
                value={value}
                onChange={(e) => setValue(e.target.value)} />
        </InputLabel>
    )
}

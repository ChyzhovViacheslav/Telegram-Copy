import React, { useState } from 'react'
import styled from 'styled-components'
import IconSelector from '../../../assets/icons/icons'
import { changeSearchValue } from '../../../store/reducers/searchSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    background-color: var(--input-search-border-color);
    padding: 8px 16px;
    border-radius: 20px;
    align-items: center;
    margin-left: 15px;
    overflow: hidden;
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
    line-height: 120%;
    color: var(--primary-text-color);
    &::placeholder{
        color: var(--primary-text-color);
        opacity: 0.7;
    }
`

const ClearInput = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: ${props => props.active ? 'translate(-50%, -50%) scale(1) rotate(180deg)' : 'translate(-50%, -50%) scale(0)'};
    pointer-events: ${props => props.active ? 'all' : 'none'};
    right: 20px;
    top: 50%;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    svg{
        width: 20px;
        height: 20px;
        opacity: 0.7;
    }
`

export default function InputSearch() {
    const {searchValue} = useAppSelector(state => state.searchSlice)
    const dispatch = useAppDispatch()

    const changeSearchValueHandler = (e) => {
        dispatch(changeSearchValue(e.target.value))
    }

    const clearInputHandler = () => dispatch(changeSearchValue(''))

    return (
        <InputWrapper>
            <IconSelector id='search' />
            <Input
                placeholder='Search'
                value={searchValue}
                onChange={changeSearchValueHandler} />
            <ClearInput active={searchValue} onClick={clearInputHandler}>
                <IconSelector id={'close'} color='#fff'/>
            </ClearInput>
        </InputWrapper>
    )
}

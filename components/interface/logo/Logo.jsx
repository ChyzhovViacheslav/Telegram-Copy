import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.img`
    border-radius: 100%;
    background-color: red;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
`

export default function Logo({photo}) {
  return (
    <LogoStyle src={photo}/>
  )
}

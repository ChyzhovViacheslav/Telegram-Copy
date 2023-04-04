import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
    border-radius: 100%;
    width: ${props => props.size};
    height: ${props => props.size};
    flex-shrink: 0;
    overflow: hidden;
    img{
      width: ${props => props.size};
      height: ${props => props.size};
    }
`

export default function Logo({ image, size }) {
  return (
    <LogoStyle size={size}>
      {image === undefined ? null :<Image
        alt="user logo"
        src={require(`../../../server/images/${image}`)}/>}
    </LogoStyle>
  )
}

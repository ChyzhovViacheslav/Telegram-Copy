import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
    border-radius: 100%;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    overflow: hidden;
    img{
      width: 50px;
      height: 50px;
    }
`

export default function Logo({ image }) {
  return (
    <LogoStyle>
      {image === undefined ? null :<Image
        alt="user logo"
        src={require(`../../../server/images/${image}`)}/>}
    </LogoStyle>
  )
}

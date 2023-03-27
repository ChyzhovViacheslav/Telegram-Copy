import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.div`
    border-radius: 100%;
    background-color: red;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    overflow: hidden;
    img{
      width: 50px;
      height: 50px;
    }
`

export default function Logo({ photo }) {
  // const photos = require('../../../server/images/1679777347168.png')
  return (
    <LogoStyle>
      {/* <Image
        alt="user logo"
        src={''}/> */}
    </LogoStyle>
  )
}

import React from 'react'
import styled from 'styled-components'
import Sidebar from '../components/sidebar/Sidebar'

const App = styled.div`
  width: 100wh;
  height: 100vh;
  background-color: rgb(19, 25, 37);
`

export default function Index() {

  return (
    <App>
      <Sidebar/>
      <h1>INDEX</h1>
    </App>
  )
}

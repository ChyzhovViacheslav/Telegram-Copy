import React from 'react'
import styled from 'styled-components'
import AuthModal from '../components/modals/Auth/AuthModal'
import Sidebar from '../components/sidebar/Sidebar'
import Settings from '../components/sidebarSettings/Settings'

const App = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: rgb(19, 25, 37);
`

export default function Index() {

  return (
    <App>
      <Sidebar />
      <AuthModal />
    </App>
  )
}

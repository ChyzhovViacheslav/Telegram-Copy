import React from 'react'
import styled from 'styled-components'
import AuthModal from '../components/modals/Auth/AuthModal'
import useAuth from '../hooks/useAuth'
import Main from '../components/Main/Main'

const App = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--surface-color);
`

export default function Index() {
  const { isAuth } = useAuth()
  return (
    <App>
      {isAuth ? <Main /> : <AuthModal />}
    </App>
  )
}

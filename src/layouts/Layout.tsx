import React from 'react'
import dynamic from 'next/dynamic'

const NavBar = dynamic(() => import('@/components/organisms/NavBar'))

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  )
}

export default Layout

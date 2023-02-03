import React from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/layout.module.scss'

const H1 = dynamic(() => import('@/components/atoms/H1'))

const ThemeSwitcher = dynamic(
  () => import('@/components/molecules/ThemeSwitcher')
)

function NavBar() {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <H1 className={styles.title}>Where in the world?</H1>
        <ThemeSwitcher />
      </div>
    </div>
  )
}

export default NavBar

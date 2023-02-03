import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import styles from '@/styles/layout.module.scss'

import moonOutlined from '../../../public/assets/svg/moon-outlined.svg'
import moonFilled from '../../../public/assets/svg/moon-filled.svg'

const Img = dynamic(() => import('@/components/atoms/Img'))
const P = dynamic(() => import('@/components/atoms/P'))

function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={styles.switcherContainer}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Img
        className={styles.switcherIcon}
        src={theme === 'light' ? moonOutlined : moonFilled}
        alt="Moon Outlined"
      />
      <P className={styles.switcherText}>Dark Mode</P>
    </div>
  )
}

export default ThemeSwitcher

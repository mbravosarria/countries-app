import React from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import styles from '@/styles/theme-switcher.module.scss'

import moonOutlined from '../../../public/assets/svg/moon-outlined.svg'
import moonFilled from '../../../public/assets/svg/moon-filled.svg'

const Icon = dynamic(() => import('@/components/atoms/Icon'))
const P = dynamic(() => import('@/components/atoms/P'))

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className={styles.container}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icon
        className={styles.icon}
        src={theme === 'light' ? moonOutlined : moonFilled}
        alt="Moon Outlined"
      />
      <P className={styles.text}>Dark Mode</P>
    </div>
  )
}

export default ThemeSwitcher

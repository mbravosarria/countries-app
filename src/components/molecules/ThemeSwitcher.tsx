import React from 'react'
import dynamic from 'next/dynamic'
import styles from '@/styles/theme-switcher.module.scss'

import moonOutlined from '../../../public/assets/svg/moon-outlined.svg'

const Icon = dynamic(() => import('@/components/atoms/Icon'))
const P = dynamic(() => import('@/components/atoms/P'))

function ThemeSwitcher() {
  return (
    <div className={styles.container}>
      <Icon className={styles.icon} src={moonOutlined} alt="Moon Outlined" />
      <P className={styles.text}>Dark Mode</P>
    </div>
  )
}

export default ThemeSwitcher

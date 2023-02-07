import React, { useEffect, useState } from 'react'
import styles from '@/styles/country-details.module.scss'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import arrowLeftLight from '../../../public/assets/svg/arrow-left-light.svg'
import arrowLeftDark from '../../../public/assets/svg/arrow-left-dark.svg'

const Img = dynamic(() => import('@/components/atoms/Img'))
const Button = dynamic(() => import('@/components/atoms/Button'))

function BackButton() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      <Link href={'/'}>
        <Button className={styles.backButton}>
          <Img
            className={styles.backButtonIcon}
            src={theme === 'light' ? arrowLeftLight : arrowLeftDark}
            alt="Moon Outlined"
          />
          Back
        </Button>
      </Link>
    </div>
  )
}

export default BackButton

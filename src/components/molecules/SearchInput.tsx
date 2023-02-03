import React, { useEffect, useState } from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { useTheme } from 'next-themes'
import searchLight from '../../../public/assets/svg/search-light.svg'
import searchDark from '../../../public/assets/svg/search-dark.svg'

const Input = dynamic(() => import('@/components/atoms/Input'))
const Img = dynamic(() => import('@/components/atoms/Img'))

function SearchInput() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={styles.searchInput}>
      <Img
        src={theme && theme === 'light' ? searchLight : searchDark}
        alt="Search Icon"
        className={styles.searchInputIcon}
      />
      <Input
        type="text"
        className={styles.searchInputField}
        placeholder="Search for a country..."
      />
    </div>
  )
}

export default SearchInput

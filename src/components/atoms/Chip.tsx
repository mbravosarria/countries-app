import React from 'react'
import styles from '@/styles/country-details.module.scss'
import { ChipProps } from '@/configurations/interfaces'

function Chip({ children }: ChipProps) {
  return <div className={styles.chipAtom}>{children}</div>
}

export default Chip

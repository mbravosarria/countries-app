import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'
import { InfoLineProps } from '@/configurations/interfaces'

const P = dynamic(() => import('@/components/atoms/P'))

function InfoLine({ label, value }: InfoLineProps) {
  return (
    <div className={styles.infoLine}>
      <P className={styles.infoLineLabel}>{label}:</P>
      <P>{value || '(Undefined)'}</P>
    </div>
  )
}

export default InfoLine

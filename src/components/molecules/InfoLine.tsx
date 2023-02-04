import React from 'react'
import styles from '@/styles/home.module.scss'
import dynamic from 'next/dynamic'

const P = dynamic(() => import('@/components/atoms/P'))

interface Props {
  label: string
  value: string
}

function InfoLine({ label, value }: Props) {
  return (
    <div className={styles.infoLine}>
      <P className={styles.infoLineLabel}>{label}:</P>
      <P>{value || '(Undefined)'}</P>
    </div>
  )
}

export default InfoLine

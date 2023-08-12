import React from 'react'
import styles from "./Card.module.css"

const Card = ({children, cardClass}) => {
  return <div className={`${styles.card} ${cardClass}`}>Card</div>
}

export default Card
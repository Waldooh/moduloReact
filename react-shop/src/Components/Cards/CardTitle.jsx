import React from "react"
import styles from './CardTitle.module.scss'

const CardTitle = ({title, oferta}) => {
    const titleMayus = title.toUpperCase()
    const classOferta = oferta 
    ? 'text-success'
    : ''

    return (
            <h5 className={`card-title ${styles.primaryTitle} ${classOferta}`}>{titleMayus}</h5>
    )
}

export default CardTitle
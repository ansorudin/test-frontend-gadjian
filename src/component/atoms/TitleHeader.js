import React from 'react'
import './atoms.scss'

const TitleHeader = ({title, description}) => {
    return (
        <div className='title-header'>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default TitleHeader

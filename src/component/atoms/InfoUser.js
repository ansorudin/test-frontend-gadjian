import React from 'react'

const InfoUser = ({title, isi}) => {
    return(
        <div className='wrapper-info'>
            <p className='title'>{title}</p>
            <p className='isi'>{isi}</p>
        </div>
    )
}

export default InfoUser

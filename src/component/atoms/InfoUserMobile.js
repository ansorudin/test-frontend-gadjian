import React from 'react'

const InfoUserMobile = ({name, phone_number}) => {
    return(
        <div className='wrapper-info-mobile'>
            <div className='wrapper-info'>
                <p className='title'>Name</p>
                <p className='isi'>{name}</p>
            </div>
            <div className='wrapper-info'>
                <p className='title'>Telephone</p>
                <p className='isi'>{phone_number}</p>
            </div>
        </div>
    )
}

export default InfoUserMobile

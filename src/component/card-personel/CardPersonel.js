import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CardPersonel.scss'
import moment from 'moment'

const InfoUser = ({title, isi}) => {
    return(
        <div className='wrapper-info'>
            <p className='title'>{title}</p>
            <p className='isi'>{isi}</p>
        </div>
    )
}

const CardPersonel = ({personel_id, foto_user, name, phone_number, birthday, email, border}) => {
    return (
        <div className={`container-card ${border ? 'card-border' : ''}`}>
            <div className='wrapper-header-card'>
                <p>
                    Personel ID : <span>{personel_id ? personel_id.slice(0, 13) : 'NA'}</span>
                </p>
                <FontAwesomeIcon icon={faEllipsisH} className='icon-header' />
            </div>

            <div className='wrapper-middle-card'>
                <div className='wrapper-foto'>
                    <img src={foto_user} alt='user-foto' className='foto-user' />
                </div>
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
            </div>

            <div className='wrapper-bottom-card'>
                <InfoUser title='Name' isi={name} />
                <InfoUser title='Telephone' isi={phone_number} />
                <InfoUser title='Birthday' isi={moment(birthday).format('DD - MMM')} />
                <InfoUser title='Email' isi={email} />
            </div>
        </div>
    )
}

export default CardPersonel

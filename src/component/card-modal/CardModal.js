import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import InfoUser from '../atoms/InfoUser'
import InfoUserMobile from '../atoms/InfoUserMobile'
import moment from 'moment'
import './CardModal.scss'

const CardModal = ({personel_id, foto_user, name, phone_number, birthday, email, border}) => {
    return (
        <div 
            className={`container-card-modal ${border ? 'card-border-modal' : ''}`}
        >
            <div className='wrapper-header-card-modal'>
                <p>
                    Personel ID : <span>{personel_id ? personel_id.slice(0, 13) : 'NA'}</span>
                </p>
                <FontAwesomeIcon icon={faEllipsisH} className='icon-header-modal' />
            </div>

            <div className='wrapper-middle-card-modal'>
                <div className='wrapper-foto-modal'>
                    <img src={foto_user} alt='user-foto' className='foto-user-modal' />
                </div>
                <InfoUserMobile name={name} phone_number={phone_number} />
            </div>

            <div className='wrapper-bottom-card-modal'>
                <InfoUser title='Name' isi={name} />
                <InfoUser title='Telephone' isi={phone_number} />
                <InfoUser title='Birthday' isi={moment(birthday).format('DD - MMM')} />
                <InfoUser title='Email' isi={email} />
            </div>
        </div>
    )
}

export default CardModal

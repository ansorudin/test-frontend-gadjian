import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './CardPersonel.scss'
import moment from 'moment'
import {motion} from 'framer-motion'
import { CardPersonelVariants } from '../../config/animation/cardAnimation'
import InfoUserMobile from '../atoms/InfoUserMobile'
import InfoUser from '../atoms/InfoUser'

const CardPersonel = ({personel_id, foto_user, name, phone_number, birthday, email, border}) => {

    return (
        <motion.div 
            className={`container-card ${border ? 'card-border' : ''}`}
            initial="off"
            animate='on'
            exit="off"
            variants={CardPersonelVariants}
            whileHover={{scale : 1.03}}
        >
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
                <InfoUserMobile name={name} phone_number={phone_number} />
            </div>

            <div className='wrapper-bottom-card'>
                <InfoUser title='Name' isi={name} />
                <InfoUser title='Telephone' isi={phone_number} />
                <InfoUser title='Birthday' isi={moment(birthday).format('DD - MMM')} />
                <InfoUser title='Email' isi={email} />
            </div>
        </motion.div>
    )
}

export default CardPersonel

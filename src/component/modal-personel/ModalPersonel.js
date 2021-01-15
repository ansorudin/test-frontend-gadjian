import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Modal from 'react-modal';
import notFound from '../../assets/image/not-found.svg'
import CardModal from '../card-modal/CardModal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

const ModalPersonel = ({modalIsOpen, onClick, searchResult}) => {
    return (
        <Modal isOpen={modalIsOpen} style={customStyles}>
            <div className='modal-container'>
                <FontAwesomeIcon onClick={onClick} icon={faPlus} className='icon-close' />
                <div className='wrapper-card'>
                    {
                        searchResult ? 
                        <CardModal
                            personel_id={searchResult.id.value} 
                            foto_user={searchResult.picture.large}
                            name={searchResult.name.first + ' ' + searchResult.name.last}
                            phone_number={searchResult.phone}
                            birthday={searchResult.dob.date}
                            email={searchResult.email}
                        />
                        :
                        <div className='wrapper-not-found'>
                            <p>Opps, data not found</p>
                            <img className='icon-not-found' src={notFound} alt='icon-not-found' />
                        </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ModalPersonel

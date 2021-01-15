import React from 'react'
import './Header.scss'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import GadjianLogo from './../../assets/image/gadjian-logo.png'
import {onMobileActive} from '../../redux/action/mobileSectionAction/MobileActive'

const header = ({onMobileActive}) => {

    return (
        <div className='container-header'>
            <div className='wrapper-logo'>
                <FontAwesomeIcon 
                    icon={faBars} 
                    className='icon-bars' 
                    onClick={() => onMobileActive()}
                />
                <img src={GadjianLogo} alt='logo' className='logo-header' />
            </div>
            <div className='wrapper-left-header'>
                <div className='wrapper-username-header'>
                    <p>
                        Hallo,
                    </p>
                    <p className='username-text-header'>
                        Gadjian User
                    </p>
                </div>
        
                <span className='user-foto-header'>
                    
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        MobileActive : state.MobileActive
    }
}

const mapDispatchToProps = {
    onMobileActive
}

export default connect(mapStateToProps, mapDispatchToProps) (header)

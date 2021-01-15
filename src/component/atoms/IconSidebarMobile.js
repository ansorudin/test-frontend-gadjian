import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const IconSidebarMobile = ({icon, isi, activeLink}) => {
    return(
        <div className='option-list'>
            <span>
                <FontAwesomeIcon icon={icon} className='icon-sidebar-mobile' />
            </span>
            <div className={activeLink}>
                <p>{isi}</p>
            </div>
        </div>
    )
}

export default IconSidebarMobile

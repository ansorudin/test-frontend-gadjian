import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {motion} from 'framer-motion'
import React from 'react'

const IconSidebarDesktop = ({icon, isi, activeLink}) => {
    return(
        <div className={`wrapper-icon-sidebar ${activeLink}`}>
            <span>
                <FontAwesomeIcon icon={icon} className='icon-sidebar-content' />
            </span>
            <motion.p
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >{isi}</motion.p>
        </div>
    )
}

export default IconSidebarDesktop

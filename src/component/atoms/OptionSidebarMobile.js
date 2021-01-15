import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import IconSidebarMobile from './IconSidebarMobile'
import { variantsLink } from '../../config/animation/mobileSectionAnimation'

const OptionSidebarMobile = ({linkTo, onClick, icon, activeLink, isi}) => {
    return(
        <motion.div 
            variants={variantsLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <Link to={linkTo} onClick={onClick}>
                <IconSidebarMobile activeLink={activeLink} isi={isi} icon={icon} />
            </Link>
        </motion.div>
    )
}

export default OptionSidebarMobile

import React from 'react'
import TitleHeader from '../../component/atoms/TitleHeader'
import './Beranda.scss'
import PageUnderContruction from '../../component/atoms/PageUnderContruction'
import {motion} from 'framer-motion'
import { pageVariants } from '../../config/animation/pageTransitionAnimation'

const Beranda = () => {
    return (
        <motion.div 
            className='wrapper-beranda'
            // config for page transition
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            <div className='header-beranda'>
                <TitleHeader
                    title='BERANDA'
                    description='All about beranda is here'
                />
            </div>
            {/* this page not include requirements so saya membuat page ini menjadi under contruction */}
            <PageUnderContruction />
        </motion.div>
    )
}

export default Beranda

import React from 'react'
import './DailyAttendance.scss'
import PageUnderContruction from '../../component/atoms/PageUnderContruction'
import TitleHeader from '../../component/atoms/TitleHeader'
import {motion} from 'framer-motion'
import { pageVariants } from '../../config/animation/pageTransitionAnimation'


const DailyAttendance = () => {
    return (
        <motion.div 
            className='wrapper-daily'
            // config for page transition
            initial="out"
            animate="in"
            exit="out"
            variants={pageVariants}
        >
            <div className='header-daily'>
                <TitleHeader
                    title='Daily Attendance'
                    description='All about daily attendance is here'
                />
            </div>
            {/* this page not include requirements so saya membuat page ini menjadi under contruction */}
            <PageUnderContruction />
        </motion.div>
    )
}

export default DailyAttendance

import React from 'react'
import './DailyAttendance.scss'
import PageUnderContruction from '../../component/atoms/PageUnderContruction'
import TitleHeader from '../../component/atoms/TitleHeader'

const DailyAttendance = () => {
    return (
        <div className='wrapper-daily'>
            <div className='header-daily'>
                <TitleHeader
                    title='Daily Attendance'
                    description='All about daily attendance is here'
                />
            </div>
            <PageUnderContruction />
        </div>
    )
}

export default DailyAttendance

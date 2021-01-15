import React from 'react'
import TitleHeader from '../../component/atoms/TitleHeader'
import './Beranda.scss'
import PageUnderContruction from '../../component/atoms/PageUnderContruction'

const Beranda = () => {
    return (
        <div className='wrapper-beranda'>
            <div className='header-beranda'>
                <TitleHeader
                    title='Beranda'
                    description='All about beranda is here'
                />
            </div>
            <PageUnderContruction />
        </div>
    )
}

export default Beranda

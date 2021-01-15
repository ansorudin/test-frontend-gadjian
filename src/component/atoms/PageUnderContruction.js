import React from 'react'
import UnderContruc from '../../assets/image/working.svg'

const PageUnderContruction = () => {
    return (
        <div className='wrapper-undercontruction'>
            <div className='text-undercontruction'>
                <h3>COOMING SOON</h3>
                <p>This page under contruction</p>
            </div>
            <img 
                src={UnderContruc} 
                alt='under-contruc' 
                className='contruction-image'
            />
        </div>
    )
}

export default PageUnderContruction

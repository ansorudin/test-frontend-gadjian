import React from 'react'
import ErrorImage from '../../assets/image/error.svg'

const ErrorPage = () => {
    return (
        <div className='wrapper-undercontruction'>
            <div className='text-undercontruction'>
                <h3>Opps, something error from server</h3>
                <p>Please reload your browser.</p>
            </div>
            <img 
                src={ErrorImage} 
                alt='error-foto' 
                className='error-image'
            />
        </div>
    )
}

export default ErrorPage

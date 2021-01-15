import React from 'react'
import Loader from 'react-loader-spinner'

const LoadingPage = () => {
    return (
        <div className='wrapper-undercontruction'>
            <Loader type="Puff" color="#5EC4C4" height={150} width={150} />
        </div>
    )
}

export default LoadingPage

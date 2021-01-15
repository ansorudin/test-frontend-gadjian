import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { connect } from 'react-redux'
import './Pagination.scss'

const Pagination = ({personnelListData, currentPage, dataPerPage, onClickLeft, onClickRight}) => {
    return (
        <div className='container-pagination'>
            <button 
            onClick={onClickLeft}
            className='wrapper-pagination'
            disabled={currentPage === 1 ? true : false}
            >
                <FontAwesomeIcon icon={faChevronLeft} className='icon-left' />
                <p>Previous Page</p>
            </button>
            <button 
            onClick={onClickRight}
            className='wrapper-pagination'
            disabled={personnelListData.data && (Math.ceil(personnelListData.data.length / dataPerPage)) === currentPage ? true : false }
            >
                <p>Next Page</p>
                <FontAwesomeIcon icon={faChevronRight} className='icon-right' />
            </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        personnelListData : state.PersonnelList
    }
}

export default connect(mapStateToProps) (Pagination)

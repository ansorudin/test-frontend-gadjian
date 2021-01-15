import React,{useEffect, useState} from 'react'
import './PersonelList.scss'

import { connect } from 'react-redux'
import {getPersonnelData, onValueFindSearch}from '../../redux/action/personelListAction/PersonelListAction'
import Pagination from '../../component/pagination/Pagination'
import GroupCardPersonel from '../../component/group-card-personel/GroupCardPersonel'
import HeaderPersonel from '../../component/header-personel/HeaderPersonel'
import ModalPersonel from '../../component/modal-personel/ModalPersonel'
import ErrorPage from '../../component/atoms/ErrorPage'
import LoadingPage from '../../component/atoms/LoadingPage'


const PersonelList = ({getPersonnelData, personnelListData, changeInputValue, onValueFindSearch}) => {

    const [currentPage, setCurrentPage] = useState(1)
    const [dataPerPage] = useState(4)
    const [currentData, setCurrentData] = useState([])
    const [modalIsOpen,setIsOpen] = useState(false)
    const [searchResult, setSearchResult] = useState(null)

    // config for pagination
    const indexOfLastData = currentPage * dataPerPage
    const indexOfFirstData = indexOfLastData - dataPerPage

    useEffect(() => {
        // function get data from Redux
        if(personnelListData.data === null){
            getPersonnelData()
        }
    }, [getPersonnelData, personnelListData.data])

    useEffect(() => {
        if(personnelListData.data !== null){
            setCurrentData(personnelListData.data.slice(indexOfFirstData, indexOfLastData))
        }
    }, [personnelListData, indexOfLastData, indexOfFirstData])

    console.log(personnelListData)

    // function for submit search
    const handlePressKey = (e) => {
        let valueLowered = changeInputValue.inputValue.toLowerCase()
        if(e.key === 'Enter'){
            const filterData = personnelListData.data && personnelListData.data.filter((val) => {
                return val.name.first.toLowerCase().includes(valueLowered)
            })
            setSearchResult(filterData[0])
            setIsOpen(true)
            onValueFindSearch('')
        }
    }
    const renderList = () => {
        if(personnelListData.data && personnelListData.loading === false){
            return(
                <GroupCardPersonel currentData={currentData} />
            )
        }else{
            return(
                <ErrorPage />
            )
        }
    }

    return (
        <div className='wrapper-main-content'>
            <ModalPersonel
                modalIsOpen={modalIsOpen}
                searchResult={searchResult}
                onClick={() => setIsOpen(false)} 
            />
            <HeaderPersonel onKeyPress={(e) => handlePressKey(e)} />
            {personnelListData.loading ? <LoadingPage /> : renderList()}
            {
                personnelListData.data ?
                    <Pagination 
                        currentPage={currentPage} 
                        dataPerPage={dataPerPage}
                        onClickLeft={() => setCurrentPage(currentPage - 1)} 
                        onClickRight={() => setCurrentPage(currentPage + 1)}
                    />
                :
                    null
            }
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        personnelListData : state.PersonnelList,
        changeInputValue : state.FindByName
    }
}

const mapDispatchToProps = {
    getPersonnelData, onValueFindSearch
}
export default connect(mapStateToProps, mapDispatchToProps) (PersonelList)

import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './HeaderPersonel'
import {onValueFindSearch} from '../../redux/action/personelListAction/PersonelListAction'
import { connect } from 'react-redux'
import TitleHeader from '../atoms/TitleHeader'

const HeaderPersonel = ({onValueFindSearch, changeInputValue, onKeyPress}) => {
    return (
        <div className='header-main-content'>
            <TitleHeader 
                title="PERSONAL LIST"
                description='List of all personnels'
            />
            <div className='right-side-main-content'>
                <div className='input-right-side'>
                    <FontAwesomeIcon icon={faSearch} className='icon-right-side' />
                    <input 
                        value={changeInputValue.inputValue} 
                        onChange={(e) => onValueFindSearch(e.target.value)} 
                        onKeyPress={onKeyPress}
                        type='text' 
                        placeholder='Find Personnels' />
                </div>

                <div className='button-right-side'>
                    <p>ADD PERSONNELS</p>
                    <FontAwesomeIcon icon={faPlus} className='icon-right-side' />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        changeInputValue : state.FindByName
    }
}

const mapDispatchToProps = {
    onValueFindSearch
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderPersonel)

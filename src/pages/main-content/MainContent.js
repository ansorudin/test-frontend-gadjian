import { faCalendarAlt, faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import Beranda from '../beranda/Beranda'
import DailyAttendance from '../daily-attendance/DailyAttendance'
import PersonelList from '../personel-list/PersonelList'
import {onMobileNotActive} from '../../redux/action/mobileSectionAction/MobileActive'
import './MainContent.scss'

const IconSidebar = ({icon, isi, activeLink}) => {
    return(
        <div className={`wrapper-icon-sidebar ${activeLink}`}>
            <span>
                <FontAwesomeIcon icon={icon} className='icon-sidebar-content' />
            </span>
            <p>{isi}</p>
        </div>
    )
}

const IconSidebarMobile = ({icon, isi, activeLink}) => {
    return(
        <div className='option-list'>
            <span>
                <FontAwesomeIcon icon={icon} className='icon-sidebar-mobile' />
            </span>
            <div className={activeLink}>
                <p>{isi}</p>
            </div>
        </div>
    )
}

const MainContent = ({personnelListData, onMobileNotActive, MobileActive}) => {

    const [routes] = useState([
        {
            path: "/beranda",
            page: () => <Beranda />
        },
        {
            path: "/personal-list",
            exact: true,
            page: () => <PersonelList />
        },
        {
            path: "/daily-attendance",
            page: () => <DailyAttendance />
        },
    ])
    const [active, setActive] = useState('personal-list')

    return (
        <div className={personnelListData.loading ? `container-content on-loading` : 'container-content'}>
            <Router>
                {/* Dekstop Section */}
                <div className='wrapper-sidebar'>
                    <Link to='beranda' onClick={() => setActive('beranda')}>
                        <IconSidebar activeLink={active === 'beranda' ? 'active-link' : null} icon={faHome} isi='Beranda' />
                    </Link>
                    <Link to='/personal-list' onClick={() => setActive('personal-list')}>
                        <IconSidebar activeLink={active === 'personal-list' ? 'active-link' : null} icon={faUsers} isi='Personal List' />
                    </Link>
                    <Link to='daily-attendance' onClick={() => setActive('daily-attendance')}>
                        <IconSidebar activeLink={active === 'daily-attendance' ? 'active-link' : null} icon={faCalendarAlt} isi='Daily Attendance' />
                    </Link>
                </div>

                {/* Mobile Section */}
                <div className={MobileActive.mobileActive ? 'wrapper-sidebar-mobile on-display' : 'wrapper-sidebar-mobile' }>
                    <div className='wrapper-icon-close'>
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className='icon-close' 
                            onClick={() => onMobileNotActive()}
                        />
                    </div>
                    <div className='wrapper-option'>
                        <Link to='beranda' onClick={() => {setActive('beranda');onMobileNotActive()}}>
                            <IconSidebarMobile activeLink={active === 'beranda' ? 'underline-text' : null} icon={faHome} isi='Beranda' />
                        </Link>
                        <Link to='/personal-list' onClick={() => {setActive('personal-list');onMobileNotActive()}}>
                            <IconSidebarMobile activeLink={active === 'personal-list' ? 'underline-text' : null} icon={faUsers} isi='Personal List' />
                        </Link>
                        <Link to='daily-attendance' onClick={() => {setActive('daily-attendance');onMobileNotActive()}}>
                            <IconSidebarMobile activeLink={active === 'daily-attendance' ? 'underline-text' : null} icon={faCalendarAlt} isi='Daily Attendance' />
                        </Link>
                        
                    </div>
                </div>
                <Switch>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            children={<route.page />}
                        />
                    ))}
                </Switch>
            </Router>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        personnelListData : state.PersonnelList,
        MobileActive : state.MobileActive
    }
}

const mapDispatchToProps = {
    onMobileNotActive
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContent)

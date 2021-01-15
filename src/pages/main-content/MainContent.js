import React, {useState} from 'react'
import { faCalendarAlt, faHome, faPlus, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { motion, AnimatePresence} from "framer-motion";
import './MainContent.scss'

import Beranda from '../beranda/Beranda'
import DailyAttendance from '../daily-attendance/DailyAttendance'
import PersonelList from '../personel-list/PersonelList'
import {onMobileNotActive} from '../../redux/action/mobileSectionAction/MobileActive'
import {variants} from '../../config/animation/mobileSectionAnimation'
import IconSidebarDesktop from '../../component/atoms/IconSidebarDesktop'
import OptionSidebarMobile from '../../component/atoms/OptionSidebarMobile'


const MainContent = ({personnelListData, onMobileNotActive, MobileActive}) => {

    const [routes] = useState([
        {
            path: "/beranda",
            page: () => <Beranda />
        },
        {
            path: "/",
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
                {/* Sidebar desktop section */}
                <div className='wrapper-sidebar'>
                    <Link to='beranda' onClick={() => setActive('beranda')}>
                        <IconSidebarDesktop activeLink={active === 'beranda' ? 'active-link' : null} icon={faHome} isi='Beranda' />
                    </Link>
                    <Link to='/' onClick={() => setActive('personal-list')}>
                        <IconSidebarDesktop activeLink={active === 'personal-list' ? 'active-link' : null} icon={faUsers} isi='Personal List' />
                    </Link>
                    <Link to='daily-attendance' onClick={() => setActive('daily-attendance')}>
                        <IconSidebarDesktop activeLink={active === 'daily-attendance' ? 'active-link' : null} icon={faCalendarAlt} isi='Daily Attendance' />
                    </Link>
                </div>

                {/* Sidebar mobile Section */}
                <motion.div 
                    className={MobileActive.mobileActive ? 'wrapper-sidebar-mobile on-display' : 'wrapper-sidebar-mobile'}
                    // config for animation
                    initial={false}
                    animate={MobileActive.mobileActive ? "open" : "closed"}
                >
                    <div className='wrapper-icon-close'>
                        <FontAwesomeIcon 
                            icon={faPlus} 
                            className='icon-close' 
                            onClick={() => onMobileNotActive()}
                        />
                    </div>
                    <motion.div
                        variants={variants}
                        className='wrapper-option'
                    >
                        <OptionSidebarMobile 
                            icon={faHome}
                            activeLink={active === 'beranda' ? 'underline-text' : null}
                            isi='Beranda'
                            linkTo='/beranda'
                            onClick={() => {setActive('beranda');onMobileNotActive()}}
                        />
                        <OptionSidebarMobile 
                            icon={faUsers}
                            activeLink={active === 'personal-list' ? 'underline-text' : null}
                            isi='Personal List' 
                            linkTo='/'
                            onClick={() => {setActive('personal-list');onMobileNotActive()}}
                        />
                        <OptionSidebarMobile 
                            icon={faCalendarAlt} 
                            isi='Daily Attendance'
                            activeLink={active === 'daily-attendance' ? 'underline-text' : null}
                            linkTo='/daily-attendance'
                            onClick={() => {setActive('daily-attendance');onMobileNotActive()}}
                        />
                    </motion.div>
                </motion.div>
                <AnimatePresence>
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
                </AnimatePresence>
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
